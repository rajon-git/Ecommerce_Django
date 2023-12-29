from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serailizers import ProductSerializer
from .products import products
# Create your views here.



@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serailizer = ProductSerializer(products, many=True)
    return Response(serailizer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serailizer = ProductSerializer(product, many=False)
    return Response(serailizer.data)