//Level Low
// Ejercicio 1, 3 y 5
/*
function add(numero1,numero2) {
    let resultado = numero1*numero2
    return resultado    
}

// Ejercicio 2
add()

// Ejercicio 4
let number1 = 100
let number2 = 20
add(number1,number2)

// Ejercicio 6

let addAnonimo =  function (numero1,numero2){
    let resultado = numero1*numero2
    return resultado
}

addAnonimo(number1,number2)
*/
//Level Medium
//Ejercicio 1
/*
function greet(name){
    console.log(`Hola ${name}`)
}

greet('Agustin')

//Ejercicio 2

let producto = function(num1,num2){
    return num1*num2
}

console.log(producto(5,5))

//Ejercicio 3

function area(base,altura){
    return base*altura/2
}

console.log(area(5,15))

//Ejercicio 4

function perimeter(lado1,lado2,lado3){
    return lado1 + lado2 + lado3
}

console.log(perimeter(4,4,4))

//Ejercicio 5

function comprar(precio,cantidad){
    if(cantidad >= 20){
        return cantidad*precio*0.8
    } else if(cantidad >= 10){
        return cantidad*precio*0.9
    } else {
        return cantidad*precio
    }
}

console.log(comprar(100,100))

//Ejercicio 6

function isAnAdult(edad){
    if(edad >= 18){
        return "You are an adult"
    } else {
        return "You are not an adult"
    }
}

console.log(isAnAdult(17))
*/
//Level High
//Ejercicio 1

function impuestos(ingreso){
    if (ingreso <= 10000){
        return ingreso*0.1
    } else if(ingreso>10000 && ingreso<=20000){
        return ingreso*0.15
    } else{
        return ingreso*0.2
    }
}

console.log(impuestos(125000))

//Ejercicio 2

function semana(dia){
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un dia habil"
        case 6:
        case 7:
            return "Es fin de semana"
        default:
            return "Error: Ingrese un numero del 1 al 7"
    }
}

console.log(semana(7))

//Ejercicio 3

function persona(nombre,apellido,edad){
    nombre = prompt('Ingrese su nombre')
    if(nombre == "" || nombre == null){
        console.error('Debe ingresar su nombre')
    }
    apellido = prompt('Ingrese su apellido')
    if(apellido == "" || apellido == null){
        console.error('Debe ingresar su apellido')
    }
    edad = prompt('Ingrese su edad')
    if(edad == "" || edad == null){
        console.error('Debe ingresar su edad')
    }
    let objetoPersona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
    console.log(objetoPersona)
    
}

persona()

//Ejercicio 4

function saludo(nombre){
    return `Hola, mi nombre es ${nombre} `
}
function calcularEdad(nacimiento,actualidad){
    return actualidad-nacimiento
}

function presentacion(nombre,nacimiento,actualidad){
    nombre = prompt('Ingrese su nombre')
    nacimiento = prompt('Ingrese su año de nacimiento')
    actualidad = prompt('Ingrese el año actual')
    alert(saludo(nombre)+calcularEdad(nacimiento,actualidad))
}

presentacion()