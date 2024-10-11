function operaciones()
{
    let n1, n2 , tipoope,ope, respuestas;
    n1=parseInt(document.getElementById("n1").value);
    n2=parseInt(document.getElementById("n2").value);
    tipoope=document.getElementById("tipo").value;
    
    if (isNumber(n1) && isNumber (n2))
    {
        switch(tipoope)
        {
            case "+":ope=n1+n2;break;
            case "-":ope=n1-n2;break;
            case "*":ope=n1*n2;break;
            case "/":ope=n1/n2;break;
            
        }
        let respuestas=document.getElementById("resultado").innerHTML=`<h3>${n1} ${tipoope} ${n2}=${ope}</h3>`
    }
    else
    
        //let respuestas=document.getElementById("resultado");
        //respuestas.innerHTML=`<h3>Ingresa solo numeros</h3>`
        alert('Ingresa solo numeros')
    
    
}

function isNumber(n)
{
    return !isNaN(parseInt(n) && isFinite(n));
}

