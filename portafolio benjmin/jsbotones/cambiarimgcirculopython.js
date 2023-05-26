var img = [
    "imgproyectosgeneral/foto-aviones-abandonados-bosque.jpg",
    "imgproyectosgeneral/corredor-restaurante-mesas-pequenas-dos-personas.jpg",
    "imgproyectosgeneral/otra-imagen.jpg"
  ];
  var indiceimg = 0;
  
  var circlulopython = document.getElementsByClassName('circulospython');
  for (var i = 0; i < circlulopython.length; i++) {
    circlulopython[i].addEventListener("click", function() {
      var circleIndex = Array.from(circlulopython).indexOf(this);
      cambiarImagenpython(circleIndex);
    });
  }
  
  function cambiarImagenpython(indice) {
    var image = document.getElementById('imagenprimariaphyton');
    
    if (indice !== undefined) {
      indiceimg = indice;
    } else {
      indiceimg++;
      if (indiceimg >= img.length) {
        indiceimg = 0;
      }
    }
  
    image.src = img[indiceimg];
  
    for (var i = 0; i < circlulopython.length; i++) {
      if (i === indiceimg) {
        circlulopython[i].classList.add("activepython");
      } else {
        circlulopython[i].classList.remove("activepython");
      }
    }
  };
  