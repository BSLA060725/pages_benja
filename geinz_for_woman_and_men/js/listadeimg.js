var productos=[
    {
    img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
    },
    { 
    img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
    },
    {
    img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
    },
    {
    img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
    },
    {
    img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
    },
    {
        img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
        },
        {
            img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
            },
            {
                img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
                },
                {
                    img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
                    },
                    {
                        img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
                        },
                        {
                            img:"img/joven-pensativo-senalar-dedo-arriba.jpg"
                            },
                            
    


];
var contenedorimg=document.getElementById("productoslistasimg");
productos.forEach(produc =>{
    const li=document.createElement('li');
    li.innerHTML=`
   
    <div class="listaimg_pro">
    <img src="${produc.img}" alt="${produc.titulo}" class="producto-imagen">
    </div>
    
    `;
    contenedorimg.appendChild(li);
})
   