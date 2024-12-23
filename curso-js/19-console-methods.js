// Console

// log

console.log("Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.")
console.log("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de información adicional.")

// table

let data = [
    ["Tomas", 20],
    ["Sata", 21]
]

console.table(data)

data = [
    {name: "Tomas", age: 20},
    {name: "Sara", age: 21}
]

console.table(data)

// group 

console.group("Usuario:")
console.log("Nombre: Tomas")
console.log("Edad: 20")
console.groupEnd()

// time

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1") // mismo texto de cuando empiezo a contar

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

// console.clear()

