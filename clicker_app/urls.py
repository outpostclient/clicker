# myapp/urls.py
from django.urls import path
from .views import CategoryListCreateAPIView,CategoryRetrieveUpdateDestroyAPIView, BlogListCreateAPIView, CategoryFeatureListCreateAPIView, BlogRetrieveUpdateDestroyAPIView,CategoryFeatureRetrieveUpdateDestroyAPIView,BlogListByCategoryAPIView,CategoryListWithBlogsAPIView,ParentCategoryListView,get_category_names,SitePageRetrieveAPIView,ContactCreateAPIView,increment_page_view

urlpatterns = [
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<slug:slug>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-retrieve-update-destroy'),
    path('blogs/', BlogListCreateAPIView.as_view(), name='blog-list-create'),
    path('category-feature/', CategoryFeatureListCreateAPIView.as_view(), name='blog-list-create'),
    path('blogs/<slug:slug>/', BlogRetrieveUpdateDestroyAPIView.as_view(), name='blog-retrieve-update-destroy'),
    # path('cat-feature/<id:id>/', CategoryFeatureRetrieveUpdateDestroyAPIView.as_view(), name='category-feature-retrieve-update-destroy'),
    path('blogs/category/<int:category_id>/exclude/<int:current_blog_id>/', BlogListByCategoryAPIView.as_view(), name='blog-list-by-category'),
    path('categories-with-blogs/', CategoryListWithBlogsAPIView.as_view(), name='categories-with-blogs'),
    path('parent-categories/', ParentCategoryListView.as_view(), name='parent-category-list'),
    path('category-names/', get_category_names, name='get_category_names'),
    path('sitepage/<slug:slug>/', SitePageRetrieveAPIView.as_view(), name='sitepage-detail'),
    path('contact/', ContactCreateAPIView.as_view(), name='contact-create'),
    # path('all-cateory-list/', AllCategoryListViewSet.as_view(), name='all-category-list-view'),
    path('blogs/<int:blog_id>/view/', increment_page_view, name='view_blog'),
    # path('blogs/category/slug/<slug:slug>/', BlogListByCategorySlugAPIView.as_view(), name='blog-list-by-category-slug'),
]

