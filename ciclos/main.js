//Level Low
//Ejercicio 1
/*
let numeroIngresado = Number(prompt('Ingrese un numero del 1 al 100'))
for(let i = numeroIngresado; i >= 0; i--){
    console.log(i)
}

//Ejercicio 2

let numeroMultiplicar = Number(prompt('Ingrese un numero entre el 1 y 10'))
for(let i=1; i <=10; i++){
    console.log(`${i}x${numeroMultiplicar}=${i*numeroMultiplicar}`)
}

//Ejercicio 3

let numeroSumar = Number(prompt('Ingerse un numero para sumar. Ingrese 0 para finalizar'))
let resultado = 0
while(numeroSumar != 0){
    resultado += numeroSumar
    numeroSumar = Number(prompt('Ingerse un numero para sumar. Ingrese 0 para finalizar'))
}
console.log(resultado)

//Ejercicio 4

let numeroSumar = Number(prompt('Ingerse un numero para sumar. Ingrese 0 para finalizar'))
let resultado = 0
do{
    if(numeroSumar == 0){
        break
    }
    resultado += numeroSumar
    numeroSumar = Number(prompt('Ingerse un numero para sumar. Ingrese 0 para finalizar'))
}while(numeroSumar != 0)
console.log(resultado)

//Ejercicio 5

let objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
    propiedad4: "valor4",
    propiedad5: "valor5"
}

for(let i in objeto){
    console.log(i)
}

//Ejercicio 6

for(let i in objeto){
    console.log(objeto[i])
}
*/

//Level Medium
//Ejercicio 1
/* 
let secreto = Math.round(Math.random()*100)
let numeroIngresar = Number(prompt('Ingrese un numero'))
let contador = 0
while(true){
    contador++
    if(numeroIngresar == secreto){
        alert(`Felicidades. ${contador} Intentos`)
        break
    } else if(numeroIngresar > secreto){
        console.log('El numero ingresado es mayor al secreto')
        numeroIngresar = Number(prompt('Ingrese un numero'))
    } else {
        console.log('El numero ingresado es menor al secreto')
        numeroIngresar = Number(prompt('Ingrese un numero'))
    }
}

//Ejercicio 2

let numeroDivisible = Number(prompt('Ingrese un numero'))
for(let i = 0; i <= numeroDivisible; i++){1
    if(numeroDivisible % i == 0){
        console.log(i)
    }
}

//Ejercicio 3

function ringbell(){
    console.log("Ding Dong")
    return "Ding Dong,"
}

let cantidad = Number(prompt('Ingrese un numero'))
let cadena = ""

for(let i = 0; i < cantidad; i++){
    cadena+=ringbell() +" "
}
console.log(cadena)

//Ejercicio 4

const dateLimit = '1997-8-3'
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

for(let i of dates){
    if(i >= dateLimit){
        console.log(i)
    }
}

//Ejercicio 5

let colores = ["red","green","blue","violet","brown","black","white"]

for(let i of colores){
    console.log(i)
}

//Ejercicio 6
function colours(){
    let colores = ["red","green","blue","violet","brown","black","white"]

    for(let i of colores){
        console.log(i)
    }
}

colours()

//Ejercicio 7

let numeros = [1,2,3,4,5]

for(let i of numeros){
    console.log(`the number is ${i} and its double is ${i*2}`)
}

//Ejercicio 8

let familia = [{name: 'Raul', lastname: 'Silva', age: 43 , member: 'Padre'},{name: 'Maria', lastname: 'Mendoza', age: 39 , member: 'Madre'},{name: 'Jorge', lastname: 'Silva', age: 8 , member: 'Hijo'},{name: 'Benjamin', lastname: 'Silva', age: 2 , member: 'Hijo'}]

function presentacion(familia = []){
    let largo = familia.length
    for(i of familia){
        console.log(`Hola soy ${i.name} ${i.lastname} (${i.member}) y tengo ${i.age} años`)
    }
}

presentacion(familia)
*/

//Level High
//Ejercicio 1
/* 
let numeroIngreso = Number(prompt('Ingrese un numero. 0 para finalizar'))
let numeroPares = 0
let numeroImpares = 0

while(numeroIngreso != 0){
    if(numeroIngreso % 2 == 0){
        numeroPares += numeroIngreso
    } else {
        numeroImpares += numeroIngreso
    }
    numeroIngreso = Number(prompt('Ingrese un numero. 0 para finalizar'))
}

console.log(`Numero par: ${numeroPares} \nNumeros impares: ${numeroImpares}`)
*/
//Ejercicio 2

let numeroMasGrande = [133,2,3,-455,5,6,227,8,9,22]
let max = 0
for(i of numeroMasGrande){
    if(i > max){
        max = i
    }
}

alert(max)
