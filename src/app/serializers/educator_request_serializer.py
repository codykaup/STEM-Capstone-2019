from app.models.educator_request import EducatorRequest
from app.models.user import User
from app.models.organization import Organization
from rest_framework import serializers

class EducatorRequestSerializer(serializers.ModelSerializer):
    user = serializers.HyperlinkedRelatedField(view_name='user-detail', queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    # organization = serializers.HyperlinkedRelatedField(view_name='organization-detail', queryset=Organization.objects.all())
    organization = serializers.StringRelatedField()

    class Meta:
        model = EducatorRequest
        fields = (
            "user",
            "organization",
            "approved",
            "reviewed",
            "url"
        )
