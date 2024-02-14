// Level Low
/* EJERCICIOS 
let num1 = 4
let num2 = 5

if (num1 > num2){
    console.log(num1)
}else if(num2>num1){
    console.log(num2)
} else{
    console.log("Los numeros son iguales")
}

if (num1 == num2){
    console.log("Los numeros son iguales")
} else{
    console.log("Los numeros son distintos")
}

let date1 = "2018-9-2"
let date2 = "2023-7-5"

if (date1 > date2){
    console.log(`La fecha ${date1} es mayor que ${date2}`)
} else if(date2 > date1){
    console.log(`La fecha ${date2} es mayor que ${date1}`)
} else {
    console.log("Las fechas son iguales")
}

let nume1 = 5
let nume2 = 7
let nume3 = 9

if ((nume1 > nume2) && (nume1 > nume3)){
    console.log(`El numero1: ${nume1} es el mas grande`)
} else if ((nume2 > nume3) && (nume2 > nume1)){
    console.log(`El numero2: ${nume2} es el mas grande`)    
} else{
    console.log(`El numero3: ${nume3} es el mas grande`)
}
*/

// Level Medium

/*EJERCICIOS
//Ejercicio 1
let color = prompt('Ingrese un color. (rojo, azul o verde)')
if(!color){
    color="error"
} else{
    color.toLowerCase()
}

switch (color){
    case "rojo":
        alert('rojo: “El color de la pasión”')
        break
    case "azul":
        alert("azul: “El color del mar”")
        break
    case "verde":
        alert("Verde: “El color de la naturaleza”")
        break
    default:
        alert(color)
} 
//Ejercicio 2
let operacion = prompt('Operacion. (suma, resta, multiplicacion, division)')
let numer1 = Number(prompt("Ingrese un numero del 1 al 100"))
let numer2 = Number(prompt("Ingrese un numero del 1 al 100"))


if(!operacion){
    operacion="error"
} else{
    operacion.toLowerCase()
}

switch (operacion){
    case "suma":
        alert(`la suma de ${numer1} y ${numer2} es ${numer1+numer2}`)
        break
    case "resta":
        alert(`la resta de ${numer1} y ${numer2} es ${numer1-numer2}`)
        break
    case "multiplicacion":
        alert(`la multiplicacion de ${numer1} y ${numer2} es ${numer1*numer2}`)
        break
    case "division":
        if (numer2 == 0){
            alert("No se puede dividir entre 0")
        } else {
            alert(`la division de ${numer1} y ${numer2} es ${numer1/numer2}`)
        }
        break
    default:
        alert(operacion)
}
//Ejercicio 3
const persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.69
}

const persona2 = {
    nombre: "Jose",
    edad: 35,
    altura: 1.73
}

let control1
let control2

if (persona1.altura > persona2.altura){
    control1 = true
} else {
    control1 = false
}

if (persona1.edad > persona2.edad){
    control2 = true
} else{
    control2 = false
}

if (control1 && control2){
    console.log(`${persona1.nombre} es mas alto y mayor que ${persona2.nombre}`)
} else if (!control1 && !control2){
    console.log(`${persona2.nombre} es mas alto y mayor que ${persona1.nombre}`)
}else if (!control1 && control2){
    console.log(`${persona2.nombre} es mas alto y ${persona1.nombre} es mayor`)
} else if (control1 && !control2){
    console.log(`${persona1.nombre} es mas alto y ${persona2.nombre} es mayor`)
}

//Ejercicio 4
let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"))
let altura = Number(prompt("Ingrese su altura (CM)"))
let vision = Number(prompt("Ingrese su vision"))

let cumpleEdad = edad >= 18
let cumpleVision = vision >= 8
let cumpleAltura = altura > 110

if (cumpleEdad && cumpleVision && cumpleAltura){
    console.log("Estas calificado para conducir")
} else {
    console.log('No cumples uno o mas requisitos')
}

//Ejercicio 5
let edad = Number(prompt("Ingrese su edad"))

if (0 <= edad && edad <= 12){
    alert('Eres infantil')
} else if (12 < edad && edad <= 18){
    alert('Eres adolescente')
}else if (18 < edad && edad <=45){
    alert('Eres joven mayor')
} else if (45 < edad && edad <=100){
    alert('Eres una persona mayor')
} else if (edad >100){
    alert("¿Es realmente tan viejo?")
} else{
    alert('Edad invalida')
}



//Ejercicio 6

let numeroDeTres = Number(prompt("Ingrese un numero del 1 al 3"))
let numeroExtra = Number(prompt("Ingrese un numero"))

switch (numeroDeTres){
    case 1:
        alert(`El numero ingresado es ${numeroExtra}`)
        break
    case 2:
        alert(`El doble del numero ingresado es ${numeroExtra*2}`)
        break
    case 3:
        alert(`tres veces el numero ingresado es ${numeroExtra*3}`)
        break
    default:
        alert("ese valor no esta permitido")
}
*/

//Level High
//Ejercicio 1
let nombreCliente = prompt('Ingrese su nombre')
let pase = prompt('Pase (vip o normal)')
let entrada = prompt('Entrada (si o no)').toLowerCase()
let usarEntrada
let comprar
let dinero

if (nombreCliente == "Agustin"){
    alert('Bienvenido')
} else if (pase == "vip"){
    alert('Bienvenido')
} else if (entrada == "si"){
    usarEntrada = confirm('Usar la entrada')
    if (usarEntrada){
        alert('Bienvenido')
    } else {
        alert('Adios')
    }
} else{
    comprar = confirm("Quieres comprar ?")
    if (comprar){
        dinero = Number(prompt('Ingrese dinero'))
        if (dinero >= 1000){
            alert('Venta exitosa. Bienvenido.')
        } else{
            alert('Dinero insuficiente')
        }
    } else {
        alert('Adios')
    }
}

