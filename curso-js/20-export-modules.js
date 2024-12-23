// Exportación de módulos

// funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "Tomas"

// Clases

export class Circle {
    
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

// Exportación por defecto

export default function substract(a, b) { // Debe ser una sola como default
    return a - b
}

// export default function substract2(a, b) {
//     return a - b
// }

// export default class MyClass {
    
//     func() {
//         console.log("Mi clase")
//     }
// }