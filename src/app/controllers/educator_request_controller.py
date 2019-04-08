from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from app.models.organization import Organization
from app.models.educator_request import EducatorRequest
from app.serializers.educator_request_serializer import EducatorRequestSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, mixins

# class EducatorRequestViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
class EducatorRequestViewSet(viewsets.ModelViewSet):
    queryset = EducatorRequest.objects.all()
    serializer_class = EducatorRequestSerializer
    permission_classes = [IsAuthenticated,]

    def perform_create(self, serializer):
        organization = Organization.objects.get(name=self.request.POST['organization'])
        serializer.save(user=self.request.user, organization=organization)
