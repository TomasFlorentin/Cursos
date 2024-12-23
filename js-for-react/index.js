const user = {
    name: 'ryan',
    lastname: 'perez',
    age: 30,
    addres: {
        country: 'Colombia',
        city: 'Bogota',
        street: 'main street 123'
    },
    friends: ['brandom', 'elena'],
    active: true,
    sendMail() { //methods
        return 'sending email...'
    }
}

console.log(user.addres.city)
console.log(user.friends)
console.log(user.active)
console.log(user.sendMail())