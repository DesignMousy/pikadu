//Создаем переменную, в которой положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//Создаем переменную, в которой положим меню
let menu = document.querySelector('.sidebar');
//Отслеживаем клик по кнопке иеню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
//Отменяем стандартное поведение ссылки
    event.preventDefault();
    // Вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle('visible');
})
 