const btnMenu = document.getElementById('btn-menu')
const navBar = document.getElementById('navbar')

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('change')
  navBar.classList.toggle('show')
})


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }

window.onscroll = () => {
  console.log(document.body.scrollTop)
}

