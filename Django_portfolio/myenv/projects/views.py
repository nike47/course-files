from django.shortcuts import render, get_object_or_404

from django.http import HttpResponse

from .models import projects

# Create your views here.

def index(request):
    project = projects.objects
    return render(request, 'projects/index.html', {'projects' : project})


def detail(request, project_id):
    project_detail = get_object_or_404(projects, pk = project_id)
    return render(request, 'projects/detail.html', {'projects' : project_detail})

