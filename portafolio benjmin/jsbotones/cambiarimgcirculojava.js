var img = [
    "imgproyectosgeneral/foto-aviones-abandonados-bosque.jpg",
    "imgproyectosgeneral/corredor-restaurante-mesas-pequenas-dos-personas.jpg",
    "imgproyectosgeneral/otra-imagen.jpg"
  ];
  var indiceimg = 0;
  
  var circlulo = document.getElementsByClassName('circulosjava');
  for (var i = 0; i < circlulo.length; i++) {
    circlulo[i].addEventListener("click", function() {
      var circleIndex = Array.from(circlulo).indexOf(this);
      cambiarImagenn(circleIndex);
    });
  }
  
  function cambiarImagenn(indice) {
    var image = document.getElementById('imagenprimariajava');
    
    if (indice !== undefined) {
      indiceimg = indice;
    } else {
      indiceimg++;
      if (indiceimg >= img.length) {
        indiceimg = 0;
      }
    }
  
    image.src = img[indiceimg];
  
    for (var i = 0; i < circlulo.length; i++) {
      if (i === indiceimg) {
        circlulo[i].classList.add("activejava");
      } else {
        circlulo[i].classList.remove("activejava");
      }
    }
  };
  