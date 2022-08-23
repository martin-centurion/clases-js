//si (condicion) entonces {algo}
// parseo de variable parseInt(convierte a valor numerico entero) o parseFloat(valor decimal)
//
//let numero = parseInt(prompt('ingrese un numero'));


// = asignacion de valores == comparacion
// if(numero == 12){
//     //codigo a ejecutar
//     console.log('El numero que ingresaste es 12');
// } else {
//     console.log('El numero que ingresaste no es 12' + 'Es ' + numero);
// }


//variables boleans
/*let esIgual = numero == 12;
let esMayor = numero > 23;

if(esIgual){
    //codigo a ejecutar
    console.log('El numero que ingresaste es ' + numero);
} else if(esMayor) {
    console.log('El numero que ingresaste no es 12. ' + 'Es ' + numero);
} else {
    console.log('El numero es ' + numero);
}
*/
//vareable boolean

//let verdadero=true; let falso=false;

/*
1 =='1' // true
1 === '1' // false
*/

// let usuario = prompt('Ingresa tu usuario');
// let password = prompt('Ingresa tu password');
// let pass = '1234';
// let user = 'Martin';

// if (usuario == user || password == pass){
//     console.log('Hola ' + usuario);
    
// } else {
//     console.log('Usuario o contraseña incorrecta');
// }


//AND && las dos condiciones tienen que ser verdaderas
// OR || cualquiera de las condiciones tiene que ser verdadera

let nombre = prompt ('Ingresa tu nombre');
if(nombre == 'Pedro' || nombre == 'PEDRO'){
    console.log('Hola Pedro que bueno tenerte de nuevo');
} else {
    console.log('Hola ' + nombre);
}


