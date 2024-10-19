document.addEventListener('DOMContentLoaded', function (e) {
    let elemMenu = document.querySelector('#optionMenu');
    let close = document.querySelector('.close');
    let Menu = document.querySelector('.menu');

    Menu.addEventListener('click', function (e) {
        elemMenu.style.display = 'grid'
    })
    close.addEventListener('click', function (e) {
        elemMenu.style.display = 'none'

    })
})
