# myapp/serializers.py
from rest_framework import serializers
from .models import Category, Blog, CategoryFeature,AffiliateLink
from django.shortcuts import get_object_or_404

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
        extra_kwargs = {
            'content': {'required': False},
        }

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

    class Meta:
        model = Blog
        fields = '__all__'

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

        