// Level Low

let myName = "Agustin"
console.log(myName)
let myLastName = "Casco"
let myAge = 24
let myPet = "Ruperta"
let petAge = 3
let fullName = myName + " " + myLastName
let presentationText = `im ${fullName} and im ${myAge} years old. My pet is called ${myPet} and she have ${petAge} years old `
console.log(presentationText)

// Level Medium

let sumAges = myAge + petAge
let subtractAges = myAge - petAge
let productAges = myAge * petAge
let divisionAges = myAge / petAge

console.log(` Suma: ${sumAges} \n Resta: ${subtractAges} \n Producto: ${productAges} \n Division: ${divisionAges}`)

const student = {
    nombre : myName,
    apellido : myLastName,
    edad : myAge,
    altura : 178,
    peso : 70
}

console.table(student)
console.log(student.nombre)
console.log(student.apellido)
console.log(student.edad)
console.log(student.altura)
console.log(student.peso)

const pet = {
    nombre : myPet,
    edad : petAge,
    genero : "perra",
    tamaño : "mediano",
    estadoFisico : "gorda"
}

console.table(pet)
for (let i in pet) {
    console.log(pet[i])
}

const fruits = ["Naranja","Manzana","Frutilla","Tomate","Mandarina"]
console.log(fruits)
for (let i in fruits){
    console.log(fruits[i])
}

// Level High

let edad = prompt("Ingrese su edad: ")
iamAdult = edad>=18
console.log(`I am an adult : ${iamAdult}`)

const numbers = [1,2,3,4,5]
console.log(numbers)
for (let i in numbers){
    console.log(numbers[i])
}

const family = [student,pet,student,student,pet]
console.table(family)
console.log(family)
for (let i in family){
    console.log(family[i])
}

randomText = `${fruits[1]} ${numbers[3]} ${family[4].nombre}`
console.log(randomText)