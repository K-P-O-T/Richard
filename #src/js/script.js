function testWebp(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebp(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
});








//------- Бургер -------


//Неправильно

// let header__burger = document.querySelector('.header__burger');

let header__burger = document.querySelectorAll('.header__burger,.header__link');

let header__menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

// header__burger.onclick = function () {
//     header__burger.classList.toggle('active');
//     header__menu.classList.toggle('active');
//     back.classList.toggle('lock');
// }

header__burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header__menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
});

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}



// let header__burger = document.querySelectorAll('.header__burger,.header__link');
// let header_menu = document.querySelector('.header__menu');

// header__burger.forEach(function (item) {
//     item.onclick = function () {
//         item.classList.toggle('active');
//         header_menu.classList.toggle('active');
//         back.classList.toggle('lock');
//     }
// });


//------- Бургер -------//