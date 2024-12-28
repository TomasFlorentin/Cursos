const names = ['ryan', 'joe', 'maria']

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)
// }

// names.forEach(function(name) { //Recorre cada elemento y los asigna al parametro
//     console.log(name)
// })


// !MAP
// Se usa mas este en react
// const newNames = names.map(function(name) {
//     return `Hola ${name}`
// })

// console.log(newNames)


// !FIND
// const nameFound = names.find(function(name) {
//     if (name === 'marcos') {
//         return name
//     }
// })

// console.log(nameFound)


// !FILTER
// const newNames = names.filter(function (name) { //devuelve un array
//     if (name !== 'joe') {
//         return name
//     }
// })

// console.log(newNames)

const newNames = ['marcos', 'maria', 'john']

console.log(names)
console.log(newNames)
console.log(names.concat(newNames))