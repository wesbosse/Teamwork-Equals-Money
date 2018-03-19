from django.conf.urls import url
from django.contrib import admin
import blog.views as blog

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', blog.post_list, name='post_list'),
    url(r"^blog-json/", blog.post_list_json, name='post_list_json'),
    url(r'^test-form/', blog.input_form)
] 
