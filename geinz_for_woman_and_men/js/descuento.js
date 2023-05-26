var productos2 = [
    {
        titulo: "Producto 1",
        descripcion: "Descripción del producto 1",
        imagen: "img/modelo.jpg"
      },
      {
        titulo: "Producto 2",
        descripcion: "Descripción del producto 2",
        imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      },
      {
          titulo: "Producto 2",
          descripcion: "Descripción del producto 2",
          imagen: "img/modelo.jpg"
      }
    
    // Agrega más productos aquí...
  ];

  var container2 = document.getElementById("productos_descuento");

  productos2.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="padre-descuento">
      <div class="descuento-container">
          <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="textoss">${producto.descripcion}</p>
          <button class="productos-boton">Comprar</button>
      </div>
    `;
    container2.appendChild(li);
  });