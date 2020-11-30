const listaTrabajos = document.querySelector('#lista-trabajos');
console.log(listaTrabajos)

function getInfo(){
    fetch('data/apuntes.json')
    .then(data => data.json())
    .then(data => {
        listaTrabajos.innerHTML = '';
        for (let trabajo of data) {
            listaTrabajos.innerHTML += `
            <article class="card">
                <img class ="card__img" src="${trabajo.img}" alt="Apunte YeniaArt">
            </article> `
        }
    })
}
getInfo();