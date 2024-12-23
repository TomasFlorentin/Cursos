// Funciones

// Simple
function myFunc() {
    console.log("¡Hola, funcion!")
}

for (let i = 0; i < 5; i++){
    myFunc()
}

// Con parametros

function myFuncWithParams(name){
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Tomas")
myFuncWithParams("TomiFlorentin")

// Funciones anonimas

const myFunc2 = function(name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Tomas Florentin")

// Arrow functions =

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Florentin Tomas")
myFunc4("Tomas Florentin")

// Parametros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// Por defecto

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10) 
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Funcion de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Tomas", "Florentin", "tomiflorentin", 20, true, "florentintomas@gmail.com"])

myMap = new Map([
    ["name", "Tomas"],
    ["email", "florentintomas@gmail.com"],
    ["age", 20]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))