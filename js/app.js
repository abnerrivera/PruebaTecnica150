
//nav left
const iconMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#menu')

iconMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active')
    document.body.classList.toggle('opacity')
})

//nav right
const profileIcon = document.querySelector('#menu-perfil')
const menuProfile = document.querySelector('#nav-profile')

profileIcon.addEventListener('click', (e) => {
    menuProfile.classList.toggle('active-p')
    document.body.classList.toggle('opacity-p')
})

