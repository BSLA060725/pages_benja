var proyectosmysql=[
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    {
        titulo:"proyecto agencia",
        descripcion:"proyectoagencia",
        imagen:"img/img logos/Diferencias-entre-Frontend-y-Backend-en-el-desarrollo-web-removebg-preview.png",
    },
    

];
var contenedor=document.getElementById("proyectomysql-lista");
proyectosmysql.forEach(producto=>{
    const li=document.createElement('li');
    li.innerHTML=`
    <div class="contenedor_proyectos_mysql">
    <h3>${producto.titulo}</h3>
    <img src="${producto.imagen}" alt="${producto.descripcion}">
    <button>PROVAR</button>
    </div>
    `;
    contenedor.appendChild(li)
})
