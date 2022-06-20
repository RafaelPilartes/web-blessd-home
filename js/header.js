window.addEventListener('scroll', () => {
  let header = document.getElementById('header')
  header.classList.toggle('sticky', window.scrollY > 70)
})
