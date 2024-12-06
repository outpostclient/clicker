from django.db import models
from django.utils.text import slugify
from django.utils.safestring import mark_safe
from ckeditor.fields import RichTextField
from django.utils import timezone
from django.conf import settings


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
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
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
    
    @property
    def full_image_url(self):
        if self.image:
            # Construct the full URL for the image using MEDIA_URL
            return f"{settings.MEDIA_URL}{self.image.name}"
        return None
    
class AffiliateLink(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    image_url = models.URLField(max_length=500)
    logo_url = models.URLField(max_length=500)
    description = RichTextField(blank=True, null=True)
    action_url = models.URLField(max_length=500)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
    
    @property
    def full_image_url(self):
        if self.image:
            # Construct the full URL for the image using MEDIA_URL
            return f"{settings.MEDIA_URL}{self.image.name}"
        return None
    
class SitePage(models.Model):
    title = models.CharField(max_length=255, unique=False, help_text="Main title of the page")
    subtitle = models.CharField(max_length=255, blank=True, null=True, help_text="Optional subtitle for the page")
    slug = models.SlugField(max_length=255, unique=True, blank=True, help_text="URL-friendly identifier for the page")
    description = RichTextField(blank=True, null=True, help_text="Detailed description or content of the page")
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True, help_text="Main image for the page")
    background_image = models.ImageField(upload_to='background_images/', blank=True, null=True, help_text="Background image for the page")
    status = models.BooleanField(default=True, help_text="Publish status of the page")
    date_created = models.DateTimeField(default=timezone.now, help_text="Date and time when the page was created")

    class Meta:
        verbose_name = "Site Page"
        verbose_name_plural = "Site Pages"
        ordering = ['-date_created']

    def __str__(self):
        return self.title
    
class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=True, help_text="Publish status of the page")

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"