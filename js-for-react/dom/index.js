const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'

// EVENT HANDLERS

button.addEventListener('click', function() {
    title.innerText = "Texto actualizado con JS"
    alert('Se realizo un click')
})

document.body.append(title)
document.body.append(button)
