//                PRIMERA PARTE

// Programa que al ingresar un numero diga si es positivo o negativo

function numeroDiga() {
  let number = prompt("Introducir numero: ");
  if (number > 0) {
    console.log("El numero que has ingresado es positivo.");
  } else if (number < 0) {
    console.log("El numero que has ingredo es negativo.");
  } else {
    console.log("Ingrese un valor distinto a 0.");
  }
}

// numeroDiga()

// Ingrese 2 numeros y mostrar que numero es menor.

function mayorOMenor() {
  let num1 = prompt("Introduce el primer número: ");
  let num2 = prompt("Introduce el segundo número: ");
  if (+num1 < +num2) {
    console.log(num1 + " es menor a " + num2);
  } else if (+num1 > +num2) {
    console.log(num2 + " es menor a " + num1);
  } else {
    console.log("No ingrese 2 numeros iguales.");
  }
}

// mayorOMenor()

// Solicitar un numero y determinar si es divisible entre 2 o no.

function esDivisible() {
  let num1 = prompt("Introduce un numero: ");
  if (num1 % 2 === 0) {
    console.log(num1 + " es divisible entre 2.");
  } else {
    console.log(num1 + " no es divisible entre 2.");
  }
}

// esDivisible()

// Factorial de un numero

function factorial() {
  let num1 = prompt("Introduce un numero: ");
  if (num1 === 0 || num1 === 1) console.log(1);
  for (let i = num1 - 1; i >= 1; i--) {
    num1 *= i;
  }
  console.log("El factorial es: " + num1);
}

// factorial()

// Verificar del 1 al 15 si el numero es par o impar en la pantalla.

function comprobar() {
  for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " es par.");
    } else {
      console.log(i + " es impar.");
    }
  }
}

// comprobar();

// Ingresar 2 numeros entre el 1 y el 50 y añadir "¡Lotería!" cuando se ingresen los numeros del usuario.

function loteria() {
  let num1 = prompt("Introduce el primer número: ");
  let num2 = prompt("Introduce el segundo número: ");
  for (let i = 1; i <= 50; i++) {
    if (+num1 >= 1 && +num1 <= 50 && +num2 >= 1 && +num2 <= 50) {
      if (i === +num1 || i === +num2) {
        console.log("¡Lotería! - " + i);
      } else {
        console.log(i);
      }
    } else {
      console.log("Por favor, ingrese números válidos entre 1 y 50.");
    }
  }
}

// loteria()

// Iterar enteros del 1 al 100, para multiplos de 3 imprimir "Fizz", para multiplos de 5 imprimir "Buzz" y multiplos de 15 "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz()

// Solicitar calificacion entre 1 y 10, verificar si el número está en el rango, calificacion menor a 6 "reprobado", entre 6 y 8 "regular", 9 "bien" y 10 "excelente".

function calificacion() {
  let num1 = prompt("Ingresa tu calificación: ");
  if (+num1 >= 1 && +num1 <= 10) {
    if (+num1 < 6) {
      console.log("Reprobado");
    } else if (+num1 >= 6 && +num1 <= 8) {
      console.log("Regular");
    } else if (+num1 === 9) {
      console.log("Bien");
    } else {
      console.log("Excelente");
    }
  } else {
    console.log("Error: La calificación debe estar entre 1 y 10.");
  }
}

// calificacion()

// Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida, cuánto le costará en función del topping que elija.

function helado() {
  let topping = prompt("Ingrese el topping: ");
  let helado = 50;
  let precioTopping = 0;
  if (topping === "oreo") {
    precioTopping = 10;
  } else if (topping === "kitkat") {
    precioTopping = 15;
  } else if (topping === "brownie") {
    precioTopping = 20;
  } else {
    console.log("No tenemos este topping, lo sentimos.");
  }
  const total = helado + precioTopping;
  console.log("El precio del helado es " + total + " MXN.");
}

// helado()

// Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

function cursos() {
  let programa = prompt("Ingresa el programa de tu interés: ");
  let tipoBeca = prompt("Ingrese su beca de descuento: ");
  let precioProgramas = 0;
  if (programa === "course") {
    precioProgramas = 4999;
  } else if (programa === "carrera") {
    precioProgramas = 3999;
  } else if (programa === "master") {
    precioProgramas = 2999;
  }
  if (tipoBeca === "facebook") {
    precioProgramas = precioProgramas - precioProgramas * 0.2;
  } else if (tipoBeca === "google") {
    precioProgramas = precioProgramas - precioProgramas * 0.15;
  } else if (tipoBeca === "jesua") {
    precioProgramas = precioProgramas - precioProgramas * 0.5;
  }
  if (programa === "course") {
    precioProgramas = precioProgramas * 2;
  } else if (programa === "carrera") {
    precioProgramas = precioProgramas * 6;
  } else if (programa === "master") {
    precioProgramas = precioProgramas * 12;
  }
  console.log(
    "El precio total por el curso elegido es de: " + precioProgramas + " MXN."
  );
}

// cursos();

// Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos.

function recorrido() {
  let tipoVehiculo = prompt("Ingrese su tipo de vehìculo: ");
  let kmRecorridos = prompt("Ingrese los kilometros recorridos: ");
  let litrosConsumidos = prompt("Ingrese los litros consumidos: ");
  let precioKilometros = 0;
  let total = 0;
  if (tipoVehiculo === "coche") {
    precioKilometros = 0.2;
  } else if (tipoVehiculo === "moto") {
    precioKilometros = 0.1;
  } else if (tipoVehiculo === "autobus") {
    precioKilometros = 0.5;
  }
  if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
    total = precioKilometros * kmRecorridos + 5;
  } else {
    total = precioKilometros * kmRecorridos + 10;
  }
  console.log("Total a pagar por distancia recorrida: " + total + " dólares.");
}

// recorrido();

//                      SEGUNDA PARTE

// Invertir un arreglo usando el bucle for:

let arreglo = [5, 1, 8, 6, 3];
let arregloNuevo = [];

for (let i = arreglo.length - 1; i >= 0; i--) {
  arregloNuevo.push(arreglo[i]);
}

console.log("Arreglo original: ", arreglo);
console.log("Arreglo nuevo: ", arregloNuevo);

// Calcular la suma de todos los elementos de un arreglo

let arreglo2 = [2, 8, 5, 3, 1];
let suma = 0;

for (let i = 0; i < arreglo2.length; i++) {
  suma += arreglo2[i];
}

console.log("Arreglo:", arreglo2);
console.log("Suma de elementos:", suma);

// Encuentra el numero mayor de un arreglo

let arreglo3 = [4, 5, 1, 8, 3];
let numMayor = arreglo3[0];

for (let i = 1; i < arreglo3.length; i++) {
  if (arreglo3[i] > numMayor) {
    numMayor = arreglo3[i];
  }
}

console.log("Arreglo:", arreglo3);
console.log("Número mayor:", numMayor);

// Encuentra todos los números pares de un arreglo y crear un arreglo nuevo con ellos.

let arreglo4 = [3, 4, 5, 12, 6, 1, 13];
var arregloPar = [];

for (var i = 0; i < arreglo4.length; i++) {
  if (arreglo4[i] % 2 === 0) {
    arregloPar.push(arreglo4[i]);
  }
}

console.log("Arreglo original:", arreglo4);
console.log("Arreglo de números pares:", arregloPar);

// Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”.

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const librosLeidos = library.filter((libro) => libro.readingStatus);
librosLeidos.forEach((libro) => {
  console.log(`Libro: ${libro.title}, Autor: ${libro.author}`);
});
