from django.db import models
from app.models.user import User
from app.models.organization import Organization

class EducatorRequest(models.Model):
    user = models.ForeignKey(User, related_name='educator_request', on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, related_name='educator_request', on_delete=models.CASCADE)
    approved = models.BooleanField(default=False)
    reviewed = models.BooleanField(default=False)

    def __str__(self):
        return "{} ==> {}".format(self.user, self.organization)
