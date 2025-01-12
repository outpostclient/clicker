# myapp/views.py
from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from rest_framework import status
from .models import Category, Blog, CategoryFeature,SitePage
from .serializers import CategorySerializer, BlogSerializer, CategoryFeatureSerializer,SitePageSerializer,ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.db import connection

from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view

class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.filter(status=True).order_by('-updated_date', 'orderBy')
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = Category.objects.filter(status=True).order_by('-updated_date', 'orderBy')
    serializer_class = CategorySerializer

class BlogListCreateAPIView(generics.ListCreateAPIView):
    queryset = Blog.objects.filter(status=True).order_by('-updated_date', 'orderBy')
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        # Only save the content provided without generating it
        serializer.save()

class BlogRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'slug'
    queryset = Blog.objects.filter(status=True).order_by('-updated_date', 'orderBy')
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
        return Blog.objects.filter(category_id=category_id).exclude(id=current_blog_id).order_by('-updated_date', 'orderBy')


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


class SitePageRetrieveAPIView(RetrieveAPIView):
    lookup_field = 'slug'  # Field used to retrieve the object
    queryset = SitePage.objects.filter(status=True)  # Filter to only active pages
    serializer_class = SitePageSerializer

    def get_serializer_context(self):
        # Pass the request context to the serializer
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def get(self, request, *args, **kwargs):
        slug = kwargs.get('slug')
        try:
            # Fetch the page object
            page = self.queryset.get(slug=slug)
            # Pass the context with the request to the serializer
            serializer = self.serializer_class(page, context=self.get_serializer_context())
            return Response(serializer.data, status=status.HTTP_200_OK)
        except SitePage.DoesNotExist:
            return Response({'error': 'Page not found'}, status=status.HTTP_404_NOT_FOUND)
        

class ContactCreateAPIView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET'])
def increment_page_view(request,blog_id):

    blog = get_object_or_404(Blog,id=blog_id)
    blog.pageview += 1
    blog.save()

    return Response({
        "success":True,
        "pageview":blog.pageview
    })