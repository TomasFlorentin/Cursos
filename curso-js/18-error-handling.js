// Excepción

// Produce una excepción
let myObject
// console.log(myObject.email)

// Captura de errores

// try-catch

try {
    // Codigo que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecucion sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

// Captura del error

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error", error.message)
}

// finally

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error", error.message)
} finally {
    console.log("Este codigo se ejecuta siempre")
}

// No esta soportado
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este codigo se ejecuta siempre")
// }

// Lanzamiento de errores

// throw

// throw new Error("Se ha producido un error");

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion solo suma numeros")
    }

    // if (!Number.isInteger(a)) {
    //     console.log("No es un numero")
    // }

    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operacion solo suma numeros enteros")
    }
    if (a == 0 || b == 0){
        throw new SumZeroIntegerError("Se esta intentado sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers(5, "10"))
    console.log(sumIntegers("5", "10"))
} catch (error){
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error){
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a 
        this.b = b
    }

    printNumber() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error){
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumber()
}