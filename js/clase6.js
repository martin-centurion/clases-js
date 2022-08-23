// let ingreso = prompt(
//     'Ingresa una opción \n 1-Café \n 2-Café con leche \n 3-Té \n 4-Té con lehce \n 5-Agua caliente'
// );

// switch (ingreso) {
//     case '1':
//         alert('Seleccionaste Café')
//         break;
//     case '2':
//         alert('Seleccionaste Café con leche')
//         break;
//     case '3':
//         alert('Seleccionaste Té')
//         break;
//     case '4':
//         alert('Seleccionaste Té con leche')
//         break;
//     case '5':
//         alert('Seleccionaste Agua Caliente')
//         break;
//     default:
//         alert('Opción no valida')
//         break;
// }

//funciones
//declarar una funcion

// function saludar(){
//     //codigo a ejecutar
//     alert('Hola, cómo estás?')
// }
// //llamar a la funcióm
// //saludar();

// function solicitarNombre(){
//     let nombre = prompt('Ingresa tu nombre');
//     alert(nombre);
// }

// solicitarNombre();

// function (parametros)
// function saludar(nombre, apellido){
//     alert('Hola, ' + nombre + ' ' + apellido + ' como estas?')
// }

// let ingresarNombre = prompt('Ingresa tu nombre');
// let ingresarApellido = prompt('Ingresa tu apellido');

// //pasamos a la function argumentos
// //Un argumento es el valor que es pasado a la función cuando esta es llamada 
// //(es el término para el momento en que se llama)

// saludar(ingresarNombre, ingresarApellido);

// function sumar(parametro1, parametro2) {
//     if (parametro1 == "" || parametro2 == "") {
//       alert("No puedes tener campos vacios");
//     } else {
//         let num1 = parseInt(parametro1)
//         let num2 = parseInt(parametro2)
//       alert(num1 + num2);
//     }
// }
// let num1 = prompt("Ingresa el primer numero");
// let num2 = prompt("Ingresa el segundo numero");
  
// sumar(num1, num2);

/*
function sumar (parametro1, parametro2){

    if(isNaN(parametro1) || isNaN(parametro2)) {
        alert('No puedes tener campos vacios');
    }else{
        alert(parametro1 + parametro2);
    }
}

let num1 = parseFloat(prompt('Ingresa el primer numero'));
let num2 = parseFloat(prompt('Ingresa el segundo numero'));

sumar(num1, num2);
*/

//Esto se llama Scope lo de las variables locales y globales
//variables locales y globales

let resultado = 0;
//console.log(resultado);

function sumar (n1, n2){
    //let resultado = 0;
    // variables locales
    //let resultado = n1+n1;
    return n1 + n2;
    //console.log(resultado);
    //alert(resultado);
}

console.log(sumar(23, 54));
let valorDeLaSuma = sumar(3, 54) * 2;
console.log(valorDeLaSuma);
//console.log(resultado);