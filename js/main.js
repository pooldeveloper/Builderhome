const mobilBtn = document.querySelector('.mobil-btn');
const navegacionMobil = document.querySelector('.navegacion-mobil');
const barra = document.querySelector('.barra');
const enlace = document.querySelectorAll('.enlace');

//Cabezera
mobilBtn.addEventListener('click',() =>{
	navegacionMobil.classList.toggle('mostrar-navegacion');
});
enlace.forEach((enlaces) => {
    enlaces.addEventListener('click', (e) => {
        navegacionMobil.classList.toggle('mostrar-navegacion');
        enlace.forEach((enlaceActivo)=> enlaceActivo.classList.remove('enlace-activo'));
        e.target.classList.add('enlace-activo');
    });
});

//SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]',{
	speed: 300
});


