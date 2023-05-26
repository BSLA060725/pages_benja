console.log("holao");
document .addEventListener('DOMContentLoaded',function(){
  const listaproductos=document.getElementById('productolistanv');
  const btnslider=document.getElementById('bntsliderleftnovedades');
  let scrollAmount=0;
  const scrollStep=300;

btnslider.addEventListener('click',function(){
  scrollAmount+=scrollStep;
  listaproductos.style.transform=`translateX(-${scrollAmount}px)`;

  if(scrollAmount>= listaproductos.scrollWidth-listaproductos.clientWidth){
    scrollAmount=0;
    listaproductos.style.transform='translateX(0)';;
  }
});
});
  
