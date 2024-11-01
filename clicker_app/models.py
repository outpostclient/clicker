from django.db import models
from django.utils.text import slugify
from django.utils.safestring import mark_safe
from ckeditor.fields import RichTextField
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    title = models.CharField(max_length=255,blank=True)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.CASCADE)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    description = RichTextField(blank=True, null=True)
    status = models.BooleanField(default=True)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name_plural = "Categories"

class Blog(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500, blank=True,null=True)
    content = RichTextField(blank=True, null=True)
    category = models.ForeignKey(Category, related_name='blogs', on_delete=models.CASCADE)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    orderBy = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    feature_title = models.CharField(max_length=255,blank=True, null=True)
    status = models.BooleanField(default=True)
    author = models.CharField(max_length=255,blank=True,null=True)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)

    @property
    def display_image(self):
        if self.image_url:
            return self.image_url
        if self.image:
            return self.image.url
        return None


class CategoryFeature(models.Model):
    title = models.CharField(max_length=255)
    description = RichTextField(blank=True, null=True)
    detail_description = RichTextField(blank=True, null=True)
    image_url = models.URLField(max_length=500,blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2,blank=True, null=True)
    review = models.PositiveIntegerField(blank=True, null=True)
    action_url = models.URLField(max_length=500,blank=True, null=True)
    logo = models.URLField(max_length=500,blank=True, null=True)
    pros = RichTextField(blank=True, null=True)
    cons = RichTextField(blank=True, null=True)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    date_created = models.DateTimeField(default=timezone.now)

    def pros_as_html(self):
        return mark_safe(self.pros)  # Use mark_safe to render HTML safely

    def cons_as_html(self):
        return mark_safe(self.cons)  # Use mark_safe to render HTML safely

    def description_as_html(self):
        return mark_safe(self.description)  # Use mark_safe to render HTML safely

    def detail_description_as_html(self):
        return mark_safe(self.detail_description)  # Use mark_safe to render HTML safely

    def __str__(self):
        return self.title
    
class AffiliateLink(models.Model):
    title = models.CharField(max_length=255)
    image_url = models.URLField(max_length=500)
    logo_url = models.URLField(max_length=500)
    description = RichTextField(blank=True, null=True)
    action_url = models.URLField(max_length=500)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title