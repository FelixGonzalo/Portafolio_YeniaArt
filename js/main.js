/* ---- lista de trabajos ---- */

const listaTrabajos = document.querySelector('#lista-trabajos');

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

/* ---- Menu desplegable---- */
const menuFrase = document.querySelector('.menu__frase');
const menuIcono = document.querySelector('.menu__icono').style;
const menuDesplegable = document.querySelector('.menu-celular').style;
menuFrase.addEventListener('click', function(e){
    console.log(screen.width)
    if (screen.width < 1000){
        if (menuDesplegable.display == 'none' || menuDesplegable.display == '') {
            menuDesplegable.display= 'block'
            menuIcono.transform = 'rotate(180deg)'
        } else{
            menuDesplegable.display= 'none'
            menuIcono.transform = 'rotate(90deg)'
        }
    }
})

/* ---- Modo dark ---- */
const modoOscuro = document.querySelector('#darkmode__checkbox')
const imgTitulo1 = document.querySelector('#titulo__img1')
const imgTitulo2 = document.querySelector('#titulo__img2')

modoOscuro.addEventListener('change', function(e){
    if (this.checked) {
        document.body.classList.toggle('modoDark')
        imgTitulo1.setAttribute('src','images/estrellas.svg')
        imgTitulo2.setAttribute('src','images/estrellas.svg')
        imgTitulo1.style.filter =  'invert(100%)';
        imgTitulo2.style.filter =  'invert(100%)';
        
    } else {
        document.body.classList.remove('modoDark')
        imgTitulo1.setAttribute('src','images/flor.svg')
        imgTitulo2.setAttribute('src','images/flor.svg')
        imgTitulo1.style.filter =  'invert(0%)';
        imgTitulo2.style.filter =  'invert(0%)';
    }
})
