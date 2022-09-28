const toogleBtn = document.getElementById('btn-menu') 
const navBar = document.getElementById('navbar')
const detailsBtn = document.getElementById('details')

toogleBtn.addEventListener('click', () => {
  toogleBtn.classList.toggle("change") 
  navBar.classList.toggle("show")
})


detailsBtn.addEventListener('click', (e) => {
  console.dir(e)
})