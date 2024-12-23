// Clases

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Tomas", 20, "Olmaw")
let person2 = new Person("Tomas", 20, "Olmaw")


console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Tomas", 20)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "Olmaw"

console.log(person3.alias)

// Funciones en clases

class PersonWhithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWhithMethod("Tomas", 20, "Olmaw")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Tomas", 20, "Olmaw", "TOMAS123456789")

// No podemos acceder
// console.log(person5.bank) // No podemos acceder
// person5.bank = "new TOMAS123456789" // bank no es #bank

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

    get bank() {
        return this.#bank
    }
}

person6 = new GetSetPerson("Tomas", 20, "Olmaw", "TOMAS123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new TOMAS123456789"
console.log(person6.bank)

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound(){
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal{

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal{

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("OlmawDog")
myDog.run()
myDog.sound()

let myFish = new Fish("OlmawFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {
    
    static sum(a, b) {
        return a + b
    }

}

console.log(MathOperations.sum(5, 10))
