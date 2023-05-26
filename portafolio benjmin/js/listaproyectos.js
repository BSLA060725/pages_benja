var proyectosc=[
    {
        titulo:"Contador de saldo",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/contador_saldo.png",
    },
    {
        titulo:"gestión de recursos humanos",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/recursos huimanos.jpg" ,
       
    },
    {
        titulo:"Proyecto tienda",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/geinzformawoomandandmen.jpg",
    },
    {
        titulo:"Calculadora (IMC)",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/calculadora-indice-masa-corporal-imc-obesos-sobrepeso-categoria-normal_664444-10.avif",
    },
    {
        titulo:"Proyecto calcualdora",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/calculadora.png",
    },
    {
        titulo:"proyecto Aereopuerto",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/lugar-vuelo-cielo-atardecer.jpg",
    },
    {
        titulo:"proyecto Agencia",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/conductor-camion-inspeccionando-vehiculo-largo-camion-antes-conducir.jpg",
    },
    {
        titulo:"proyecto Crashear una pc",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/virus informatico.jpg",
    },
    {
        titulo:"proyecto Generador de QR",
        descripcion:"proyectoagencia",
        imagen:"imgproyectosgeneral/qr (2).jpg",
    },
    
 
];
var contenedor = document.getElementById("proyectojava-lista");

// Iterar sobre cada objeto del array 'proyectosc'
proyectosc.forEach(producto => {
    // Crear elementos HTML dinámicamente
    const li = document.createElement('li'); // <li></li>
    const div = document.createElement('div'); // <div></div>
    const h3 = document.createElement('h3'); // <h3></h3>
    const img = document.createElement('img'); // <img>
    const button = document.createElement('button'); // <button></button>
    const otrodiv=document.createElement('div')
    // Agregar la clase 'contenedor_proyectos-java' al elemento 'div'
    div.classList.add('contenedor_proyectos-java');
    otrodiv.classList.add('espacioentrecontenedor');

    // Establecer el contenido del elemento 'h3' como el título del proyecto
    h3.textContent = producto.titulo;

    // Establecer la fuente de la imagen ('src') como la URL de la imagen del proyecto
    img.src = producto.imagen;

    // Establecer el atributo 'alt' de la imagen como la descripción del proyecto
    img.alt = producto.descripcion;

    // Establecer el contenido del botón como 'PROVAR'
    button.textContent = 'PROVAR';

    // Agregar los elementos hijos al elemento 'div'
    otrodiv.appendChild(div);
    div.appendChild(h3); // <div><h3></h3></div>
    div.appendChild(img); // <div><h3></h3><img></div>
    div.appendChild(button); // <div><h3></h3><img><button></button></div>

    // Agregar el elemento 'div' como hijo del elemento 'li'
    li.appendChild(otrodiv);
    li.appendChild(div); // <li><div><h3></h3><img><button></button></div></li>

    // Agregar el elemento 'li' como hijo del contenedor principal
    contenedor.appendChild(li);
});



    


