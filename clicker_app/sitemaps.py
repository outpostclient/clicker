from django.contrib.sitemaps import Sitemap
from .models import Category,Blog
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 0.7
    changefreq = "daily"

    def items(self):
        return ['about', 'contact','all-list','termsandcondition','privacyandpolicy'] 

    def location(self, item):
        return f'/{item}/'

class HomeViewSitemap(Sitemap):
    changefreq = "daily"  # Frequency of updates
    priority = 1.0  # High priority for the homepage

    def items(self):
        return ['home']  # Ensure 'home' matches the name of your URL pattern for the index page

    def location(self, item):
        return reverse(item)  # Generate the URL for the homepage ("/")


class CategorySitemap(Sitemap):
    changefreq = "daily"  # Adjust as per update frequency
    priority = 0.8

    def items(self):
        return Category.objects.all()

    def location(self, obj):
        return f'/{obj.slug}/'

class BlogSitemap(Sitemap):
    changefreq = "daily"  # Adjust as per update frequency
    priority = 0.9

    def items(self):
        return Blog.objects.select_related('category').all()

    def location(self, obj):
        return f'/{obj.category.slug}/{obj.slug}/'