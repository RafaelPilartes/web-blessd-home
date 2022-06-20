let body = document.getElementById('body')
let navbar = document.querySelector('.navbar')
let header = document.getElementById('header')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  header.classList.add('sticky')
  body.classList.toggle('bodynoscroll')
}
