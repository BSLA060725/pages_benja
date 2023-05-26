var img = [
    "imgproyectosgeneral/foto-aviones-abandonados-bosque.jpg",
    "imgproyectosgeneral/corredor-restaurante-mesas-pequenas-dos-personas.jpg",
    "imgproyectosgeneral/otra-imagen.jpg"
  ];
  var indiceimg = 0;
  
  var circlulos = document.getElementsByClassName('circulosmysql');
  for (var i = 0; i < circlulos.length; i++) {
    circlulos[i].addEventListener("click", function() {
      var circleIndex = Array.from(circlulos).indexOf(this);
      cambiarImagennmysql(circleIndex);
    });
  }
  
  function cambiarImagennmysql(indice) {
    var image = document.getElementById('imagenprimariamysql');
    
    if (indice !== undefined) {
      indiceimg = indice;
    } else {
      indiceimg++;
      if (indiceimg >= img.length) {
        indiceimg = 0;
      }
    }
  
    image.src = img[indiceimg];
  
    for (var i = 0; i < circlulos.length; i++) {
      if (i === indiceimg) {
        circlulos[i].classList.add("activemysql");
      } else {
        circlulos[i].classList.remove("activemysql");
      }
    }
  };
  