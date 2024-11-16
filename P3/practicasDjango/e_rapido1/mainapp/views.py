from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.

def index (request):
    return render(request,'mainapp/index.html',{
        'title':'Inicio',
        'content':'La pagina principal',
        'mensaje':""
    })

def about(request):
    return render(request, 'mainapp/about.html',{
        'title':"Acerca de nosotros",
        'content':'Esta pagina es de Mision y vision'
    })

def mision(request):
    return render(request, 'mainapp/mision.html',{
        'title':'mision',
        'content':'La Mision es '
    })

def vision(request):
    return render(request, 'mainapp/vision.html',{
        'title':'mision',
        'content':'La vision es'
    })

