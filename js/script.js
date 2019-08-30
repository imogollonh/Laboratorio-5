//1. IMPRIMIR EN PANTALLA UN MENSAJE
document.writeln('¡Hola mundo!\n');

//2. VENTANAS EMERGENTES
alert("SOY UNA ALERTA");

//3. FUNCIONES
//let son variables privadas para la funcion

function sumarNumeros() {
    let num1 = 5;
    let num2 = 10;
  
    document.write(num1 + num2);
  }

  //4. MENSAJES EN CONSOLA
  console.log('Esto es un mensaje en consola');

  //5. Condicional simple

var edad = prompt("Introduce tu edad");
if (Number(edad) == edad) {
	if (edad > 18)
        document.writeln("Usted es mayor de edad");
    else
        document.writeln("Usted es menor de edad");
    
}

//6. Condicional anidada
var numero = prompt("Introduce un numero");
if (Number(edad) == edad) {
	if (numero > 50)
        if (numero == 25) 
            document.writeln("Su numero es 25");  
        else
            document.writeln("Numero diferente.");
    else if (numero<50)
        if (numero == 75) 
            document.writeln("Su numero es 75");
        else
            document.writeln("Numero diferente."); 
    else
        document.writeln("Su numero es 50. \n");
}

//7. Convertir de string a entero 
numero = prompt("Ingrese un numero para convertirlo a entero operable y se le sumara 25")
var integer = parseInt(numero, 10);
var re = integer + 25;
document.writeln("Su numero es \n", re);


//8. Convertir de string a float 
numero = prompt("Ingrese un numero para convertirlo a float operable y se le sumara 25")
var integer = parseFloat(numero, 10);
var re = integer + 25;
document.writeln("Su numero es \n", re);


//9. Operaciones aritmeticas
numero = prompt("Ingrese un numero para operarlo + / * - con el numero 2")
var integer = parseInt(numero, 10);
var re = integer + 2;
document.writeln("Su numero es +: ", re);

re = integer / 2;
document.writeln("Su numero es /: ", re);

re = integer * 2;
document.writeln("Su numero es *: ", re);

re = integer - 2;
document.writeln("Su numero es -: ", re);

//10. Operadores
numero = prompt("Intoduce un numero diferente a 1 y 2: ");

if (numero == 1 || numero == 2)
    alert("Usted ingreso un 1 o 2");
else
alert("numeros diferentes");