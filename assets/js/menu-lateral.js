let menu = document.getElementById('menu')
let menuLateral = document.getElementById('menu-lateral')
let overlay = document.getElementById('overlay-menu')

menu.addEventListener('click',()=>(
  menuLateral.classList.add('abrir')
))

menuLateral.addEventListener('click',()=>(
  menuLateral.classList.remove('abrir')
))

overlay.addEventListener('click',()=>(
  menuLateral.classList.remove('abrir')
))