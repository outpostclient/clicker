# settings.py

import os
from pathlib import Path
from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-ax2a7=oj+yuifrr%p+)pba0brqjnb3-sne+1aeig!9t*)a*2dj'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# ALLOWED_HOSTS = ['*'] #development
ALLOWED_HOSTS = ['145.223.21.48','unfilterchoice.com','http://unfilterchoice.com/','www.unfilterchoice.com','https://www.unfilterchoice.com/'] #production

# Application definition

INSTALLED_APPS = [
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'clicker_app',
    'ckeditor',
    'taggit',
    'django.contrib.sitemaps'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # 'django_brotli.middleware.BrotliMiddleware',  # Add BrotliMiddleware
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# developement
# CORS_ALLOWED_ORIGINS = [
#      "http://localhost:3000",
#      "http://127.0.0.1:3000",
#      "http://localhost:3001",
#      "http://127.0.0.1:3001",
# ]

# BROTLI_MIMETYPES = [
#     'text/html',
#     'text/css',
#     'application/javascript',
#     'application/json',
# ]


# development

# production 
CORS_ALLOWED_ORIGINS = [
    "http://145.223.21.48",     # IP with HTTP
    "https://145.223.21.48",    # IP with HTTPS
    "http://unfilterchoice.com",    # Main domain with HTTP
    "https://unfilterchoice.com",   # Main domain with HTTPS
    "http://www.unfilterchoice.com",   # www subdomain with HTTP
    "https://www.unfilterchoice.com",  # www subdomain with HTTPS
]

# production

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

ROOT_URLCONF = 'clicker.urls'

#production
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.media',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# development
# TEMPLATES = [
#     {
#         'BACKEND': 'django.template.backends.django.DjangoTemplates',
#         'DIRS': [],
#         'APP_DIRS': True,
#         'OPTIONS': {
#             'context_processors': [
#                 'django.template.context_processors.debug',
#                 'django.template.context_processors.request',
#                 'django.contrib.auth.context_processors.auth',
#                 'django.contrib.messages.context_processors.messages',
#             ],
#         },
#     },
# ]

WSGI_APPLICATION = 'clicker.wsgi.application'

# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

#development
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'clicker',
#         'USER': 'root',
#         'PASSWORD': 'Admin1234',
#         'HOST': 'localhost',  # Set to the MySQL server host (e.g., 'localhost' or '127.0.0.1')
#         'PORT': '3306',      # Set to the MySQL server port (default is 3306)
#         'OPTIONS': {
#             'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
#         },
#     }
# }

#production
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'db_clicker',
        'USER': 'clicker',
        'PASSWORD': 'R1a1j1a1t1#rajat',
        'HOST': 'localhost',  # Set to the MySQL server host (e.g., 'localhost' or '127.0.0.1')
        'PORT': '3306',      # Set to the MySQL server port (default is 3306)
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

# ------------development -------- #

# STATIC_URL = '/static/'
# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static'),
# ]
# STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# ------------development -------- #


# -------production -------------#

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'staticfiles'),  # Changed to staticfiles
]
#STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_ROOT = os.path.join('/var/www/clicker', 'static')

# ---------Production -----------#

# # Media files
# MEDIA_URL = '/media/'
# MEDIA_ROOT = os.path.join('/var/www/clicker', 'media')


MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
