from rest_framework import serializers
from .models import Property


class PostPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'
        
        
class UpdatePropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['owner','name','place','location','price','address','description','phone_number','zipcode','rooms_available','room_type'] 