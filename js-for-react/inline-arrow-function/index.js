// const showText = () => {
//     return 'Hola mundo'
// }

const showText = () => 'Hola mundo' //el return es implicito
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showObject = () => ({name: 'ryan'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())


const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)