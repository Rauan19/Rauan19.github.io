const menu = document.querySelector('.menu-lateral')
const abrirmenu = document.querySelector('.botao-lista-menu')
const fecharmenu = document.querySelector('.fechar-menu')


function abriromenu(){
    menu.style.display = "block"
}

function fecharomenu(){
    menu.style.display = "none"
}








abrirmenu.addEventListener('click', abriromenu)
fecharmenu.addEventListener('click', fecharomenu)