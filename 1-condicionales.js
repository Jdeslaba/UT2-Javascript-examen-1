/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio


let operación = prompt("Que operacion desea Realizar || Sumar (+) || Restar(-) || Multiplicacion(*) || Dividir(/) ||")

// si la variable operacion es igual a el simbolo + o a la parabla sumar hace la operacion
if (operación === "+" || operación === "sumar") {
    console.log("sumar");
} else if (operación === "-" || operación === "restar") {
    console.log("Restar");
} else if (operación === "*" || operación === "multiplicar") {
    console.log("Multiplicar");
} else if (operación === "/" || operación === "dividir") {
    console.log("Dividir");
} else {
    console.log("Lo siento no conozco esa operacion");
}