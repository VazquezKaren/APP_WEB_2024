from django import forms
from django.core import validators
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegisterForm(UserCreationForm):
    class Meta:
        model=User
        fields=['username','email', 'first_name','last_name','password1','password2']

class ProductForm(forms.Form):
    product_name = forms.CharField(
        max_length=100,
        label="Producto",
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    quantity = forms.IntegerField(
        min_value=1,
        label="Cantidad",
        widget=forms.NumberInput(attrs={'class': 'form-control'})
    )