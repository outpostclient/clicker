from django.contrib import admin
from .models import Category, CategoryFeature, Blog, AffiliateLink

# Register your models here.

class BlogAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'category',
        'status',
    )
    list_editable = ('status',)
    list_per_page = 50  # Display 50 items per page
    search_fields = ('title', 'category__name')  # Enable search by title and category name

admin.site.register(Blog, BlogAdmin)

class CategoryFeatureAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'blog',
        'status',
    )
    list_editable = ('status',)
    list_per_page = 50  # Display 50 items per page
    search_fields = ('title', 'blog__title')  # Enable search by title and blog title

admin.site.register(CategoryFeature, CategoryFeatureAdmin)

class AffiliateLinkAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'blog',
        'status',
    )
    list_editable = ('status',)
    list_per_page = 50  # Display 50 items per page
    search_fields = ('title', 'blog__title')  # Enable search by title and blog title

admin.site.register(AffiliateLink, AffiliateLinkAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'parent',
        'slug',
        'status',
    )
    list_editable = ('status',)
    list_per_page = 50  # Display 50 items per page
    search_fields = ('name', 'slug', 'parent__name')  # Enable search by name, slug, and parent category name

admin.site.register(Category, CategoryAdmin)
