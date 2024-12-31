const person = {
    name: 'ryan',
    addres: {
        city: 'london'
    },
    // location: {}
}

// if (person.location) {
//     console.log(person.location.city)
// }

console.log(person.location?.city) //si el location existe, accede a city

