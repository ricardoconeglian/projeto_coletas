from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import HttpResponse, JsonResponse

from EmployeeApp.models import Coleta
from EmployeeApp.serializers import ColetaSerializer
# Create your views here.

@csrf_exempt
def coletaApi(request, idd=0):
    if request.method=='GET':
        coletas = Coleta.objects.all()[::-1][:5]
        coletas_serializer=ColetaSerializer(coletas,many=True)
        return JsonResponse(coletas_serializer.data,safe=False)
    elif request.method=='POST':
        coleta_data=JSONParser().parse(request)
        coleta_serializer=ColetaSerializer(data=coleta_data)
        if coleta_serializer.is_valid():
            coleta_serializer.save()
            return JsonResponse("Adicionado com sucesso", safe=False)
        return JsonResponse("Erro ao adicionar",safe=False)
    elif request.method=='PUT':
        coleta_data=JSONParser().parse(request)
        coleta=Coleta.objects.get(ColetaId=coleta_data['id'])
        coleta_serializer = ColetaSerializer(coleta, data=coleta_data)
        if coleta_serializer.is_valid():
            coleta_serializer.save()
            return JsonResponse("Update com sucesso", safe=False)
        return JsonResponse("Erro ao fazer Update", safe=False)
    elif request.method=='DELETE':
        coleta = Coleta.objects.get(ColetaId=idd)
        coleta.delete()
        return JsonResponse("Delete com sucesso", safe=False)

@csrf_exempt
def create(request, id=0):
    coleta_data=JSONParser().parse(request)
    coleta_serializer=ColetaSerializer(data=coleta_data)
    if coleta_serializer.is_valid():
        coleta_serializer.save()
        return JsonResponse("Adicionado com sucesso", safe=False)
    return JsonResponse("Erro ao adicionar",safe=False)
