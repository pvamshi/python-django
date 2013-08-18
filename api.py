# myapp/api.py
from tastypie.resources import ModelResource
from article.models import Article


class EntryResource(ModelResource):
    class Meta:
        queryset = Article.objects.all()
        resource_name = 'article'
