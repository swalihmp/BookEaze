from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings
from .views import start_payment,handle_payment_success,OrderView,GetOrder

urlpatterns = [
    path('pay/', start_payment.as_view(), name='pay'),
    path('success/', handle_payment_success.as_view(), name='success'),
    path('orders/<str:msg>',OrderView.as_view(), name='orders'),
    path('getorders/',GetOrder.as_view(),name='getorders'),
    
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)