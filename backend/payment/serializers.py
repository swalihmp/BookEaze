from rest_framework import serializers

from .models import Order
from property.serializers import PostPropertySerializer
from account.serializers import UserSerializer

class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'
        depth = 2
        

class GetOrderSerializer(serializers.ModelSerializer):
    property = PostPropertySerializer()
    order_user = UserSerializer()
    class Meta:
        model = Order
        fields = '__all__'
        depth = 2