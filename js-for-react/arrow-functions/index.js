// function add(x, y) {
//     return x + y
// }

// const add = (x, y) => { //es lo mismo que add = function() {}
//     return x + y
// }


const button = document.createElement('button')
button.innerText = 'click me'

button.addEventListener('click', () => {
    alert('clicked')
})

document.body.append(button)