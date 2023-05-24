const hamburguesa = document.querySelector('.header__burguer');

const cerrarHamburguesa = document.querySelector('.header__burguer-close svg');

const nav = document.querySelector('.header__nav');

//FADES
const cardsProyectos = document.querySelector('.proyectos__grid'); 

const conocimientosGrid = document.querySelector('.conocimientos__grid');

const estudiosGrid = document.querySelector('.estudios__grid');

const sobreMiGrid = document.querySelector('.sobre-mi__grid');

const contacto = document.querySelector('.contacto__contenido');

//eventos
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
    const rectProyectos = cardsProyectos.getBoundingClientRect();
    const rectConocimientos = conocimientosGrid.getBoundingClientRect();
    const rectEstudios = estudiosGrid.getBoundingClientRect();
    const rectSobreMi = sobreMiGrid.getBoundingClientRect();
    const rectContacto = contacto.getBoundingClientRect();

    if(rectProyectos.y <= 1005.53125){
        cardsProyectos.classList.remove('none');
        cardsProyectos.classList.add('fadeInUp');
    }

    if(rectConocimientos.y <= 1005.53125){
        conocimientosGrid.classList.add('fadeInUp');
    }

    if(rectEstudios.y <= 1005.53125){
        estudiosGrid.classList.add('fadeInUp');
    }

    if(rectSobreMi.y <= 1005.53125){
        sobreMiGrid.classList.add('fadeInUp');
    }

    if(rectContacto.y <= 1005.53125){
        contacto.classList.add('fadeInUp');
    }
}