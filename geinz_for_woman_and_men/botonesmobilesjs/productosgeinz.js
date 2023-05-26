
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productoslistas'); // Obtiene la referencia al elemento que contiene las imágenes
    const btnSlideLeft = document.getElementById('botonslider-producto'); // Obtiene la referencia al botón
  
    let scrollAmount = 0; // Cantidad inicial de desplazamiento
    const scrollStep = 200; // Cantidad de desplazamiento por paso (ajusta según tus necesidades)
  
    btnSlideLeft.addEventListener('click', function() {
      scrollAmount += scrollStep; // Aumenta el valor de scrollAmount por la cantidad de desplazamiento
  
      // Aplica la transformación CSS para desplazar horizontalmente las imágenes
      productList.style.transform = `translateX(-${scrollAmount}px)`;
  
      // Restablece la posición de desplazamiento si alcanza el final del contenedor
      if (scrollAmount >= productList.scrollWidth - productList.clientWidth) {
        scrollAmount = 0; // Restablece la cantidad de desplazamiento a 0
        productList.style.transform = 'translateX(0)'; // Restablece la posición de desplazamiento
      }
    });
  });
  