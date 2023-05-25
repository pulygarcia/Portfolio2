const hamburguesa = document.querySelector('.header__burguer');

const cerrarHamburguesa = document.querySelector('.header__burguer-close svg');

const nav = document.querySelector('.header__nav');

//FADES
const hiddenElementos = document.querySelectorAll('.hidden');

//Eventos
addEvents();
function addEvents(){
    hamburguesa.addEventListener('click', mostrarMenu);
    cerrarHamburguesa.addEventListener('click', cerrarMenu);
    document.addEventListener('scroll', fade);
}

//funciones
function mostrarMenu(){
    nav.classList.add('visible');
}

function cerrarMenu(){
    nav.classList.remove('visible');
}

function fade(){
    hiddenElementos.forEach(elemento => {
        const rect = elemento.getBoundingClientRect();
        if(rect.y <= 1005.53125){
            elemento.classList.remove('hidden');
            elemento.classList.add('fadeInUp');
        }
    })
}