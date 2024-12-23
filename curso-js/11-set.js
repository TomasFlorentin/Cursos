// set

// Declaracion

let mySet = new Set()
let mySet2 = {} //No es un set

console.log(mySet)
console.log(mySet2)

// Inicializacion

mySet = new Set(["Tomas", "Florentin", "Tomiflorentin", 20, true])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("Hola como estas")

console.log(mySet) // Agrega al final

mySet.delete("Florentin") // le tengo que pasar exactamente lo que quiero borrar

console.log(mySet)

console.log(mySet.delete("Tomas"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Tomiflorentin")) // pregunto si existe
console.log(mySet.has("Florentin"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Tomiflorentin")
mySet.add("Tomiflorentin")
mySet.add("Tomiflorentin")

console.log(mySet)
