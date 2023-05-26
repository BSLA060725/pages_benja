const menu = document.querySelector('.menuhamburgesa');
const barras = document.querySelectorAll('.barra');

menu.addEventListener('click', function() {
  barras.forEach(barra => barra.classList.toggle('activo'));
  document.querySelector('.enlaces').classList.toggle('mostrar');
});
