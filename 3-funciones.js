/**
 * 3 Función [4puntos]
 * 
 * Función que recibe como parámetros dos números y la operación a realizar. 
 * [1pt] Si la operación es 'sumar', muestra por pantalla la suma de ambos
 * [1pt] Si la operación es 'restar', muestra la resta
 * [1pt] Si la operación no  es ninguna de las dos, mostrar 'operación desconocida'
 * [1pt] Hacer que el parámetro de la operación sea siempre 'sumar' por defecto (en caso de que no se especifique)
 * 
 */

console.log('ejercicio 3') //no quitar este console.log, empezar debajo el ejercicio

let parametro = prompt("que operacion desea realizar? || sumar || restar|| ") // pedir el parametro

function calculadora(signo) {
    let numero1 = prompt("Introduzca el Primer numero para la Operacion");
    let numero2 = prompt("Introduzca el Segundo numero para la Operacion");

    if (signo === "sumar") {
        resto = parseFloat(numero1) + parseFloat(numero2);
        console.log("El resultado de la Suma es: " + resto);
    } else if (signo === "restar") {
        resto = parseFloat(numero1) - parseFloat(numero2);
        console.log("El resultado de la Resta es: " + resto);
    } else {

        alert("ATENCION!! Esta operacion es Desconocida")
        alert("Por lo que haremos la Operacion por Defecto: sumar")
        console.log("ATENCION: Cuando no se espesifica la funcion (sumar) o (restar)");
        console.log("El sistema realiza automaticamente sumar");

        resto = parseFloat(numero1) + parseFloat(numero2);
        console.log("El resultado de la Suma es: " + resto);

    }

}

calculadora(parametro);