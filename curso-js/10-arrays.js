// array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//Inicializacion

myArray = [1]
myArray2 = new Array(3) //Deja n espacios vacios segun el numero dentro del parentesis

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Tomas", "Florentin", "Olmaw", 37, true]
myArray2 = new Array("Tomas", "Florentin", "Olmaw", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Tomas"
myArray2[1] = "Florentin"
myArray2[2] = "TomiFlorentin"

console.log(myArray2)

myArray = []
myArray[1] = "Florentin"
// myArray[0] = "Tomas"
myArray[2] = "TomasFlorentin"

console.log(myArray)


// Metodos comunes

myArray = []

// push y pop

myArray.push("Tomas")
myArray.push("Florentin")
myArray.push("TomasFlorentin")
myArray.push("20")

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Tomas", "TomiFlorentin") // Agregar uno o mas elemento al inicio
console.log(myArray)

// length

console.log(myArray.length)

// clear

// myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray.push("Tomas", "Florentin", "Olmaw", 37, true)

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3) // elimina los elementos en ese indice
console.log(myArray)

myArray = ["Tomas", "Florentin", "Olmaw", 37, true]

myArray.splice(1, 2, "Nueva entrada") //Eliminamos desde la posicion 1 hasta la 2 y agregamos otra cosa
console.log(myArray)

