from django.conf.urls.defaults import *
import article.views

urlpatterns = patterns('',
        (r'^$',article.views.archive),
        (r'^play_pause$',article.views.playPause),
        (r'^play$',article.views.play),
        (r'^next$',article.views.next),
        (r'^previous$',article.views.previous),
        (r'^start$',article.views.start),
)
