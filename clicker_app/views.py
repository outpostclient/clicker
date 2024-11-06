# myapp/views.py
from rest_framework import generics
from .models import Category, Blog, CategoryFeature
from .serializers import CategorySerializer, BlogSerializer, CategoryFeatureSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.db import connection

class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.filter(status=True)
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = Category.objects.filter(status=True)
    serializer_class = CategorySerializer

class BlogListCreateAPIView(generics.ListCreateAPIView):
    queryset = Blog.objects.filter(status=True).order_by('orderBy')
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        # Only save the content provided without generating it
        serializer.save()

class BlogRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = Blog.objects.filter(status=True).order_by('orderBy')
    serializer_class = BlogSerializer

    def perform_update(self, serializer):
        # Only update with the provided content without generating it
        serializer.save()

class CategoryFeatureListCreateAPIView(generics.ListCreateAPIView):
    queryset = CategoryFeature.objects.filter(status=True)
    serializer_class = CategoryFeatureSerializer

class CategoryFeatureRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = CategoryFeature.objects.filter(status=True)
    serializer_class = CategoryFeatureSerializer

class BlogListByCategoryAPIView(generics.ListAPIView):
    serializer_class = BlogSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        current_blog_id = self.kwargs['current_blog_id']
        return Blog.objects.filter(category_id=category_id).exclude(id=current_blog_id)

class CategoryListWithBlogsAPIView(generics.ListAPIView):
    queryset = Category.objects.filter(status=True, parent__isnull=False)
    serializer_class = CategorySerializer

class ParentCategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.filter(parent__isnull=True)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    
def get_category_names(request):
    query = """
    SELECT name 
    FROM clicker_app_category as cat
    INNER JOIN clicker_app_blog as blog on cat.id = blog.category_id
    INNER JOIN clicker_app_categoryfeature as feature on blog.id = feature.blog_id
    """
    with connection.cursor() as cursor:
        cursor.execute(query)
        rows = cursor.fetchall()

    data = [row[0] for row in rows]
    return JsonResponse({'data': data})
