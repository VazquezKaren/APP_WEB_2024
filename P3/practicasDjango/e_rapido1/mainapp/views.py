from django.shortcuts import render, HttpResponse,redirect
from django.contrib.auth.forms import UserChangeForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
#from django.contrib.auth.forms import UserCreationForm
from mainapp.forms import RegisterForm
from django.contrib.auth.forms import UserCreationForm  
from .forms import ProductForm




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

def iniciosesion(request):
    if request.user.is_authenticated:
        return redirect('inicio')
    else:
        if request.method == "POST":
            username=request.POST.get('username')
            password=request.POST.get('password')

            user=authenticate(request,username=username,password=password)
            if user is not None:
                login(request,user)
                messages.success(request,"Bienvenido al inicio de sesion")
                return redirect ('inicio')
            else:
                messages.warning(request,"No es posible el acceso ")

        return render(request, 'users/login.html',{
            'title':'Inicio de sesion',
            
    })


def page404(request, exception):
    return render(request, 'mainapp/error404.html', status=404)

def register_user(request):
    if request.user.is_authenticated:
        return redirect ('inicio')
    else:
        registeer_form=RegisterForm()
        if request.method == "POST":
            
            registeer_form=RegisterForm(request.POST)

            if registeer_form.is_valid():
                registeer_form.save
                messages.success(request,"Registro insertado con exito")
                return redirect('inicio')
        return render(request,'users/register.html',{
            'title': 'Registro de Usuarios',
            'register_form': registeer_form
        })
    

def page404(request, exception):
    return render(request, 'mainapp/404.html', status=404)