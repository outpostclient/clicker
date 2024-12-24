# myapp/serializers.py
from rest_framework import serializers
from .models import Category, Blog, CategoryFeature,AffiliateLink,SitePage,Contact
from django.shortcuts import get_object_or_404

class BlogSerializer(serializers.ModelSerializer):
    category_name = serializers.SerializerMethodField()
    category_slug = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = '__all__'
        extra_kwargs = {
            'content': {'required': False},
        }

    def get_category_name(self, instance):
        # Return the name of the category
        return instance.category.name if instance.category else None

    def get_category_slug(self, instance):
        # Return the slug of the category
        return instance.category.slug if instance.category else None


class CategorySerializer(serializers.ModelSerializer):
    blogs = BlogSerializer(many=True, read_only=True)
    children = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = '__all__'
    
    def get_children(self,obj):
        children = Category.objects.filter(parent= obj)
        return CategorySerializer(children, many=True).data

class CategoryFeatureSerializer(serializers.ModelSerializer):
    pros = serializers.CharField(source='pros_as_html', read_only=True)
    cons = serializers.CharField(source='cons_as_html', read_only=True)
    description = serializers.CharField(source='description_as_html', read_only=True)
    detail_description = serializers.CharField(source='detail_description_as_html', read_only=True)

    class Meta:
        model = CategoryFeature
        fields = '__all__'

class AffiliateLinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = AffiliateLink
        fields = '__all__'
    
class BlogSerializer(serializers.ModelSerializer):
    category_feature = CategoryFeatureSerializer(many=True, read_only=True)
    affiliate_link = AffiliateLinkSerializer(many=True, read_only=True)
    tags = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()
    category_slug = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = '__all__'

    def get_tags(self, instance):
        # Return tags as a list of strings
        return list(instance.tags.names())

    def get_category_name(self, instance):
        # Return the name of the category
        return instance.category.name if instance.category else None

    def get_category_slug(self, instance):
        # Return the slug of the category
        return instance.category.slug if instance.category else None

    def to_representation(self, instance):
        data = super().to_representation(instance)
        slug = self.context['view'].kwargs.get('slug')
        if slug:
            blog = get_object_or_404(Blog, slug=slug)
            category_features = CategoryFeature.objects.filter(blog=blog)
            affiliate_links = AffiliateLink.objects.filter(blog=blog)
            data['category_feature'] = CategoryFeatureSerializer(category_features, many=True).data
            data['affiliate_links'] = AffiliateLinkSerializer(affiliate_links, many=True).data
        return data


    
class SitePageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    background_image = serializers.SerializerMethodField()

    class Meta:
        model = SitePage
        fields = ['id', 'title', 'slug', 'subtitle', 'description', 'image', 'background_image', 'status', 'date_created']

    def get_image(self, obj):
        request = self.context.get('request', None)
        if request and obj.image:
            return request.build_absolute_uri(obj.image.url)
        if obj.image:
            return obj.image.url  # Fallback to relative URL if no request
        return None

    def get_background_image(self, obj):
        request = self.context.get('request', None)
        if request and obj.background_image:
            return request.build_absolute_uri(obj.background_image.url)
        if obj.background_image:
            return obj.background_image.url  # Fallback to relative URL if no request
        return None
    
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'