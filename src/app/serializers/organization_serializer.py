from app.models.organization import Organization
from rest_framework import serializers

class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Organization
        fields = (
            "name",
            "approved",
            "reviewed",
            "url"
        )
