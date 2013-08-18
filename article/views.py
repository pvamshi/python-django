# Create your views here.
from datetime import datetime
from django.shortcuts import render_to_response
from article.models import Article
from subprocess import call

def archive(request):
    artcl = Article.objects.all()
    return render_to_response('articles.html',{'articles':artcl})

def playPause(request):
    print "Pause/unpause the songs"
    call(["mocp","-G"])
    return HttpResponse("success", mimetype="application/json")


def play(request):
    print "playing the songs"
    call(["mocp","-p"])
    return HttpResponse("success", mimetype="application/json")

def start(request):
    print "starting the server"
    call(["mocp","-S"])
    return HttpResponse("success", mimetype="application/json")

def next(request):
    print "Playing next song"
    call(["mocp","-f"])
    return HttpResponse("success", mimetype="application/json")

def previous(request):
    print "Playing previous song"
    call(["mocp","-r"])
    return HttpResponse("success", mimetype="application/json")


