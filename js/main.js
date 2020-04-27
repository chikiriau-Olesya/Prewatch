let btnMenu = document.querySelector('.menu__open')
let btnClose = document.querySelector('.menu__close')
let listMenu = document.querySelector('.nav__links')

btnMenu.addEventListener('click', () => {
    listMenu.style.visibility = 'visible',
    btnClose.style.visibility = 'visible',
    btnMenu.style.visibility = 'hidden'
})

btnClose.addEventListener('click', () => {
    listMenu.style.visibility = 'hidden',
    btnClose.style.visibility = 'hidden',
    btnMenu.style.visibility = 'visible'
})
