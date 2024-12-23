// Importación de módulos

import { add, PI, name, Circle } from "./20-export-modules.js";

import resta from "./20-export-modules.js"


// Funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(resta(5, 10))

// let myClass = new resta()
// myClass.func()

// Proyecto modular

// import{ MyImport } from "./directory/file.js"

// Módulos externos

const os = require("os")

console.log(os.platform())