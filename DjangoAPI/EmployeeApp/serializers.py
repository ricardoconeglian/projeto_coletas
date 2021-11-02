from rest_framework import serializers
from EmployeeApp.models import Coleta

class ColetaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Coleta
        fields=('id', 'name', 'value')