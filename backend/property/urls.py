from django.urls import path
from . import views
from .views import CreateProperty,GetProperty,SingleProperty,UpdateProperty,RemoveProperty
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('createproperty/', CreateProperty.as_view(), name='createproperty'),
    path('getproperty/',GetProperty.as_view(),name='getproperty'),
    path('singleproperty/<int:id>',SingleProperty.as_view(),name='singleproperty'),
    path('updateproperty/<int:id>',UpdateProperty.as_view(),name='updateproperty'),
    path('delete/<int:pk>',RemoveProperty.as_view(),name='delete'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)