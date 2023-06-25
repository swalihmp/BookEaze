from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import json
import razorpay
from rest_framework.decorators import api_view
from account.models import User
from datetime import datetime
import uuid
from property.models import Property

from .models import Order
from .serializers import OrderSerializer,GetOrderSerializer
# Create your views here.

class start_payment(APIView):
    def post(self, request, format=None):
        # request.data is coming from frontend
        
        amount = request.data['amount']
        current_user = request.data['user']
        property = Property.objects.get(id=request.data['property'])
        
        user = User.objects.get(id=current_user)
        PUBLIC_KEY = 'rzp_test_GrC2fomAR5BvCu'
        SECRET_KEY = 'K3oUpvscgHYIteoxLW3u0Quf'

        # setup razorpay client this is the client to whome user is paying money that's you
        client = razorpay.Client(auth=(PUBLIC_KEY,SECRET_KEY))


        payment = client.order.create({"amount": int(amount) * 100, 
                                    "currency": "INR", 
                                    "payment_capture": "1"})
        

        order = Order.objects.create(order_user=user, 
                                    order_amount=amount, 
                                    property = property,
                                    order_payment_id=payment['id'],
                                    order_date= datetime.now().date(),
                                    firtname = request.data['fname'],
                                    lastname = request.data['lname'],
                                    addrress1 = request.data['address1'],
                                    addrress2 = request.data['address2'],
                                    email = request.data['email'],
                                    phone = request.data['phone'],)

        serializer = OrderSerializer(order)
        
        order_number = uuid.uuid4().hex[:10].upper()
        
        order.order_id = order_number
        order.save()

        """order response will be 
        {'id': 17, 
        'order_date': '23 January 2021 03:28 PM', 
        'order_product': '**product name from frontend**', 
        'order_amount': '**product amount from frontend**', 
        'order_payment_id': 'order_G3NhfSWWh5UfjQ', # it will be unique everytime
        'isPaid': False}"""

        data = {
            "payment": payment,
            "order": serializer.data
        }
        return Response(data)



class handle_payment_success(APIView):
    def post(self, request, format=None):
        res = json.loads(request.data["response"])
        current_user = json.loads(request.data["user"])
        user = User.objects.get(id=current_user)



        ord_id = ""
        raz_pay_id = ""
        raz_signature = ""

        # res.keys() will give us list of keys in res
        for key in res.keys():
            if key == 'razorpay_order_id':
                ord_id = res[key]
            elif key == 'razorpay_payment_id':
                raz_pay_id = res[key]
            elif key == 'razorpay_signature':
                raz_signature = res[key]

        order = Order.objects.get(order_payment_id=ord_id)

        data = {
            'razorpay_order_id': ord_id,
            'razorpay_payment_id': raz_pay_id,
            'razorpay_signature': raz_signature
        }

        PUBLIC_KEY = 'rzp_test_GrC2fomAR5BvCu'
        SECRET_KEY = 'K3oUpvscgHYIteoxLW3u0Quf'
        
        client = razorpay.Client(auth=(PUBLIC_KEY, SECRET_KEY))

        check = client.utility.verify_payment_signature(data)


        order.isPaid = True
        order.save()
        
            
        # courses = EnrolledCourse.objects.filter(order_id=order)
        # serializers = EnrolledSerializer(courses, many=True)
        
        # orders = Order.objects.get(order_payment_id=ord_id)
        # orderserializer = OrderSerializer(orders)
            
        

        res_data = {
            'message': 'payment successfully received!',
            'order_id' : ord_id
        }

        return Response(res_data)
    

class OrderView(APIView):
    def get(self, request, msg):
        orders = Order.objects.get(order_payment_id=msg)
        orderserializer = GetOrderSerializer(orders)
        return Response(orderserializer.data)
    
class GetOrder(APIView):
    def get(self, request):
        orders = Order.objects.all()
        
        total =0
        for i in range(len(orders)):
            x = orders[i].order_amount
            total = total+int(x)
            
        print(total)
        orderserializer = GetOrderSerializer(orders, many=True)
        return Response(orderserializer.data)