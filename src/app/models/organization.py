from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=200)
    approved = models.BooleanField(default=False)
    reviewed = models.BooleanField(default=False)

    def __str__(self):
        return self.name
