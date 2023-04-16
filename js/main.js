let popup = document.querySelector('.popup'); // Само окно
let openPopupButton = document.querySelector('.btn'); // Кнопка для показа окна
let closePopupButton = document.querySelector('.close_btn'); // Кнопка_1 для скрытия окна
let closeButton = document.querySelector('.btn_modal'); // Кнопка_2 для скрытия окна

openPopupButton.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popup.classList.toggle('active'); // Добавляем класс 'active'для  окна
    })


closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popup.classList.remove('active'); // Убираем активный класс с окна
});
closeButton.addEventListener('click',() => { 
    popup.classList.remove('active'); });


    
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})