// Arreglo de imágenes
var imagenes = ["imgproyectosgeneral/foto-aviones-abandonados-bosque.jpg", "/imgproyectosgeneral/corredor-restaurante-mesas-pequenas-dos-personas.jpg", "imagen3.jpg"];
// Índice de la imagen actualmente mostrada
var indiceImagen = 0;

// Obtener los elementos HTML con la clase "circle" (círculos)
var circles = document.getElementsByClassName("circulos");
// Agregar un evento de clic a cada círculo
for (var i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function() {
    // Obtener el índice del círculo seleccionado en relación a la lista de círculos
    var circleIndex = Array.from(circles).indexOf(this);
    // Llamar a la función cambiarImagen con el índice del círculo seleccionado
    cambiarImagen(circleIndex);
  });
}

// Función para cambiar la imagen
function cambiarImagen(indice) {
  // Obtener el elemento HTML de la imagen por su id
  var image = document.getElementById("imgprimaria");

  // Si se proporciona un índice como argumento, establecerlo como el nuevo índiceImagen
  if (indice !== undefined) {
    indiceImagen = indice;
  }
  // De lo contrario, incrementar el índiceImagen y comprobar si supera la longitud del arreglo de imágenes
  else {
    indiceImagen++;
    if (indiceImagen >= imagenes.length) {
      indiceImagen = 0;
    }
  }

  // Actualizar la propiedad src de la etiqueta de imagen con la ruta de la imagen correspondiente al índiceImagen
  image.src = imagenes[indiceImagen];

  // Cambiar el estilo del círculo activo y eliminar el estilo de los demás círculos
  for (var i = 0; i < circles.length; i++) {
    if (i === indiceImagen) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
}
