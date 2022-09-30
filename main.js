const btnMenu = document.getElementById('btn-menu')
const navBar = document.getElementById('navbar')

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('change')
  navBar.classList.toggle('show')

})
