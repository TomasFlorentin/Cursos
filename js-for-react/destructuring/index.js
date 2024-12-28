const user = {
    name: 'joe',
    age: 30
}


// function printInfo({name}) { // Le digo que espero un objeto y que quiero acceder a la key con nombre 'name'
//     return '<h1>Hola ' + name + '</h1>'
// }

function printInfo(user) {
    const {name, age} = user //destructuro el objeto
    
    console.log(name, age)
    return '<h1>Hola ' + name + '</h1>'
} 


console.log(printInfo(user))

document.body.innerHTML = printInfo(user)