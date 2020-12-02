/* ---- lista de trabajos ---- */

const listaTrabajos = document.querySelector('#lista-trabajos');

function getInfo(urlJson, tipo){
    fetch(urlJson)
    .then(data => data.json())
    .then(data => {
        listaTrabajos.innerHTML = ''
        for (let trabajo of data) {
            listaTrabajos.innerHTML += `
            <article class="card">
                <img class ="card__img" src="${trabajo.img}" alt="Apunte YeniaArt">
                <div class="card_id" ><p>${tipo}00${trabajo.id}</p></div>
            </article> `
        }
    })
}
getInfo('data/cajasYbolsas.json','C')

/* ---- Filtros de trabajos*/

document.querySelector('#opApuntes').addEventListener('click', (e) => getInfo('data/apuntes.json','A'));
document.querySelector('#opFrases').addEventListener('click', (e) => getInfo('data/frases.json','F'));
document.querySelector('#opCajasYbolsas').addEventListener('click', (e) => getInfo('data/cajasYbolsas.json','C'));

document.querySelector('#opApuntes-celular').addEventListener('click', (e) => getInfo('data/apuntes.json','A'));
document.querySelector('#opFrases-celular').addEventListener('click', (e) => getInfo('data/frases.json','F'));
document.querySelector('#opCajasYbolsas-celular').addEventListener('click', (e) => getInfo('data/cajasYbolsas.json','C'));

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
            setTimeout(cerrarMenuDespegable,2000);
        } else{
            cerrarMenuDespegable();
        }
    }
})

function cerrarMenuDespegable(){
    menuDesplegable.display= 'none'
    menuIcono.transform = 'rotate(90deg)'
}

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
