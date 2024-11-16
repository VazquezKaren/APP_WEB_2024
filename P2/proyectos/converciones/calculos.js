function convertirMoneda() {
  
    let cantidad, monedaOrigen, monedaDestino, tasaCambio, resultado;
    cantidad = parseFloat(document.getElementById("cantidad").value);
    monedaOrigen = document.getElementById("monedaOrigen").value;
    monedaDestino = document.getElementById("monedaDestino").value;


    if (isNumber(cantidad) > 0) {
        if(monedaOrigen=="Peso" && monedaDestino=="Dollar"){
            resultado=cantidad*18.8;
            respuesta=document.getElementById("resultado").innerHTML = `<h2>${cantidad} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}</h2>`;

        }if(monedaOrigen=="dollar" && monedaDestino=="euro"){
            resultado=cantidad*24.8;
            respuesta=document.getElementById("resultado").innerHTML = `<h2>${cantidad} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}</h2>`;

        }if(monedaOrigen=="euro" && monedaDestino=="dollar"){
            resultado=cantidad*24.8;
            respuesta=document.getElementById("resultado").innerHTML = `<h2>${cantidad} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}</h2>`;


        }else{
            resultado=cantidad/18.9;
            respuesta=document.getElementById("resultado").innerHTML = `<h2>${cantidad} ${monedaOrigen} equivale a ${resultado} ${monedaDestino}</h2>`;
        }
      
    
       
}

