// accedemos a la pagina jsonplaceholder.typicode.com
// fetch viene con el navegador = permite colocar direccion a internet

const ul = document.createElement('ul')

// fetch('https://jsonplaceholder.typicode.com/posts') // trae datos y los guardamos en una variable
//     .then(function(response) { //cuando acabe lo de arriba, se ejecuta lo siguiente
//         return response.json()
//     }).then(function (data) {
//         console.log(data)
//         // data.forEach(function (post) {
//         //     const li = document.createElement('li');
//         //     li.innerText = post.title;
//         //     ul.append(li);
//         // });
//         // document.body.append(ul);
//     })


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    data.forEach(function (post) {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}

loadData();

console.log('linea 2')

