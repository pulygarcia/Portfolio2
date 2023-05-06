const hamburguesa = document.querySelector('.header__burguer');

const cerrarHamburguesa = document.querySelector('.header__burguer-close svg');

const nav = document.querySelector('.header__nav');

//eventos
addEvents();
function addEvents(){
    hamburguesa.addEventListener('click', mostrarMenu);
    cerrarHamburguesa.addEventListener('click', cerrarMenu);
}

//funciones
function mostrarMenu(){
    nav.classList.add('visible');
}

function cerrarMenu(){
    nav.classList.remove('visible');
}