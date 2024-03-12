const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const hamburgerMenu = document.querySelector('.hamburger-menu')

toggleBtn.onclick = function(){
    hamburgerMenu.classList.toggle('open')
    const isOpen = hamburgerMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}