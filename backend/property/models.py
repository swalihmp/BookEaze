from django.db import models
from account.models import User
# Create your models here.


class Property(models.Model):
    owner           = models.CharField(max_length=100)
    name            = models.CharField(max_length=200)
    place           = models.CharField(max_length=100)
    location        = models.CharField(max_length=200)
    price           = models.CharField(max_length=200)
    address         = models.CharField(max_length=500)    
    description     = models.TextField()    
    phone_number    = models.CharField(max_length=12)
    zipcode         = models.CharField(max_length=25)
    rooms_available = models.IntegerField()    
    room_type       = models.CharField(max_length=100)
    image_one       = models.ImageField(upload_to='photos/property')
    image_two       = models.ImageField(upload_to='photos/property')
    image_three     = models.ImageField(upload_to='photos/property',blank=True, null=True)
    image_four      = models.ImageField(upload_to='photos/property',blank=True, null=True)
    pool_available  = models.BooleanField()
    wifi_available  = models.BooleanField()

    def __str__(self):
        return self.name