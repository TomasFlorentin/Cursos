const background = 'yellow'
const color = 'white'
const isAuthorized = false;


const result = `estos son estilos: ${background} ${color}`
console.log(result)

const button = document.createElement('button');
button.innerText = 'click me';
// button.style = 'background: red; color: white;'
button.style = `background: ${isAuthorized ? background : 'red'}; color: ${color}`
// Pregunto si isAuthorized es verdadero, si es asi usar el color background, caso contrario usar el color rojo


button.addEventListener('click', () => {

    if (isAuthorized) {
        return alert('esta autorizado'); //La funcion acaba luego de un return
    };

    alert('no esta autorizado');
});

document.body.append(button);