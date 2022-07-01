/*jshint esversion: 6 */
//слайдер фото
var images = ['fon.png', 'fon2.png', 'fon3.png'];

var carusel = document.querySelector('.carusel');
var img = carusel.querySelector('img');

var i = 1;
img.src = "img/" + images[0];

window.setInterval (function () {
    img.src = "img/" + images[i];

    i++;
    if (i == images.length) {
        i = 0;
    }
}, 4000);


let menuBtn = document.querySelector('.header_burger');
let menu = document.querySelector('.header_menu');
let header = document.querySelector('.header_header');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    header.classList.toggle('new_header');
});

$('.header_burger').click(function(){
  $('header_burger').removeClass('closed');
});


