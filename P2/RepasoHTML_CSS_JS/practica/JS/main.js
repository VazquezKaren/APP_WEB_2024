// Esto es un comentario de una línea

/* Esto es
un comentario 
de varias líneas
*/

// Alerta
// alert("soy una ventana de alerta")

// Variables
var nombre = "Karen Vazquez";
let nombre2 = "Daniel el Raton";
let edad = 20;
let logica = true;
let estatura = 1.80;

// Mostrar en pantalla con write
let concatenacion = "La persona: " + nombre + " , tiene la edad de: " + edad + " años";
// document.writeln("<h1>" + concatenacion + "</h1><br>");
// document.write("La persona: " + nombre + " , tiene la edad de: " + edad + " años");

// Mostrar en pantalla con document.getElementById
let datos = document.getElementById("informacion");
datos.innerHTML = `
    <br>
    <hr>
    <h1>La persona: ${nombre2}, tiene la edad de ${edad} años</h1>
    <hr>
    <br>
`;

let datos2 = document.getElementById("informacion2");
datos2.innerHTML = `
    <br>
    <h1>La persona: ${nombre2}, tiene una edad de: ${edad}</h1>
    <hr>
    <br>
`;

datos2.innerHTML += "<h2> La edad es: " + edad + "</h2>";

// Condicionales if
if (estatura >= 1.90) {
    datos.innerHTML += `
    <hr>
    <h3> Es una persona alta</h3>
    `;
} else {
    datos.innerHTML += `
    <hr>
    <h3> Es una persona promedio</h3>
    `;
}

// Ciclos
for (let i = 1; i < 5; i++) {
    datos.innerHTML += `<hr><h3>For: el número es: ${i}</h3>`;
}

let i = 1;
while (i < 5) {
    datos.innerHTML += `<hr><h3>While: el número es: ${i}</h3>`;
    i++;
}

do {
    datos.innerHTML += `<hr><h3>Do-While: el número es: ${i}</h3>`;
    i++;
} while (i < 5);

// Funciones

// 1.- Que no recibe parámetros y no regresa valor
function sum() {
    let n1 = 5;
    let n2 = 4;
    let suma = n1 + n2;
    console.log("La suma es: " + suma);
    datos.innerHTML += `<h3>La suma es: ${suma}</h3>`;
}

sum();

// 2.- Que recibe parámetros y no regresa valor
function sum3(numero1, numero2) {
    let sum = numero1 + numero2;
    datos.innerHTML += `<hr><h3>La suma es: ${sum}</h3>`;
}

sum3(3, 4);

// 3.- Que recibe parámetros y regresa valor
function sum4(numero1, numero2) {
    return numero1 + numero2;
}

let sumaTotal = sum4(8, 5);
datos.innerHTML += `<hr><h3>La suma4 es: ${sumaTotal}</h3>`;

// Arreglos
let animales = ["Perico", "León", "Perro"];

datos.innerHTML += `<hr><h3>El rey de la selva es: ${animales[1]}</h3>`;

for (let i = 0; i < animales.length; i++) {
    datos.innerHTML += `<hr><h3>El animal es: ${animales[i]}</h3>`;
}

// Usando forEach
animales.forEach(animal => {
    datos.innerHTML += `<hr><h3>El animal es: ${animal}</h3>`;
});

// Función normal
function sumaR(a, b) {
    return a + b;
}

datos.innerHTML += `<hr><h3>La sumaR es: ${sumaR(3, 6)}</h3>`;

// Función flecha
const sumaFlecha = (a, b) => a + b;
datos.innerHTML += `<hr><h3>La sumaFlecha es: ${sumaFlecha(3, 6)}</h3>`;
