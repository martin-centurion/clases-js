//bucle en js
//i++ es igual a i=i+1

// let ingreso = parseInt(prompt('Ingresa un numero'));
// let limite = parseInt(prompt('Ingresa un limite'));
// for(let i=0; i <= limite; i++) {

//     let resultado = ingreso * i;
//     console.log(ingreso + ' x ' + i + '=' + resultado);
// }

//let palabraClave = 'patatas';

// for (let index = 1; index < 3; index++) {
//     let palabraUsuario=prompt('Ingresa tu palabra clave');
//     if(palabraClave === palabraUsuario)
//     {
//         console.log('Login exitoso');
//         break;
//     }else{
//         console.log('Te quedan ' + (3-index) + 'intentos');
//     }
// }


//continue

// for (let index = 0; index <= 10; index++) {
//     if(index == 5 || index == 9){
//         console.log('salto');
//         continue;
//     }
//     console.log(index);
// }

//While o Mientras
// let repetir = true;

// while(repetir){
//     console.log('Soy un bucle while');
//     repetir = false;
// }


// let contador = 0;

// while (contador < 10){
//     console.log('Soy un bucle while');
//     contador++;
// }

// let edad = parseInt(prompt('Ingresa tu edad'))

// while(edad < 18){
//     console.log('No puede ingresar, tienes menos de 18');
//     edad = parseInt(prompt('Ingresa tu edad'));
// }

// let palabra = 'tomate';
// let palabraIngresada = prompt('Ingresa la palabre clave');

// while(palabra != palabraIngresada){
//     console.log('Palabra incorrecta');
//     palabraIngresada=prompt('Ingresa la palabre clave');
// }

//dowhile, es muy parecido la while
// let condicion = false;
// do {
//     console.log('Yo me ejecuto igual');

// } while (condicion);
// let continuar = true;
// let passGuardado = 'tomates';

// do {
//     let password = prompt('Ingresa tu password');
//     if(password == passGuardado){
//         console.log('Bienvenidos');
//         continuar=false;
//     }


// } while (continuar);

let continuar = true;

do {
    let ingreso = prompt('Ingresa una opción');
    if (ingreso == 'salir') {
        continuar=false;
    }

} while (continuar);