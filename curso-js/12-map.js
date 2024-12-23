// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "Tomas"],
    ["email", "florentintomaslautaro@gmail.com"],
    ["age", 20]
])

console.log(myMap)

// Metodos y propiedades

// set

myMap.set("alias", "tomiflorentin") // agrega
myMap.set("alias", "tomyflorentin") // modifica

console.log(myMap)

// get

console.log(myMap.get("name"))
console.log(myMap.get("surname")) // si no existe muestra indefinido

// has

console.log(myMap.has("surname")) // no existe
console.log(myMap.has("age")) // existe

// delete

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)
