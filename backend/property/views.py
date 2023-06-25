from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PostPropertySerializer,UpdatePropertySerializer
from .models import Property
import os


# Create your views here.


class CreateProperty(APIView):
    def post(self, request, format=None):
        serializer = PostPropertySerializer(data=request.data)
        is_valid = serializer.is_valid()
        print(serializer.errors)

        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 200})
        else :
            return Response({'msg': 404})
        
        
class UpdateProperty(APIView):
        def patch(self, request, id):
            try:
                queryset = Property.objects.get(id=id)
            except:
                Property.DoesNotExist
                return Response({'msg': 404})
            
            serializer = UpdatePropertySerializer(queryset, data=request.data)
            err = serializer.is_valid()
            print(serializer.errors)
            if serializer.is_valid():
                serializer.save()
                return Response({'msg': 200})
            else:
                return Response({'msg': 500})
            
        
        
class GetProperty(APIView):
    def get(self, request):
        property = Property.objects.all()
        serializer = PostPropertySerializer(property, many=True)
        
        return Response(serializer.data)
    

class SingleProperty(APIView):
    def get(self, request, id):
        property = Property.objects.get(id=id)
        serializer = PostPropertySerializer(property)
        return Response(serializer.data)
    

class RemoveProperty(APIView):
    def delete(self, request, pk):
        try:
            property = Property.objects.get(id=pk)
            property.delete()
            return Response({'msg': 200})
        except:
            property.DoesNotExist
            return Response({'msg': 500})