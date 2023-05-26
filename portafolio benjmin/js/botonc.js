document.addEventListener('DOMContentLoaded',function(){
    const listaproducto=document.getElementById('listaproyectosc');
    const boton=document.getElementById('btn-slide-leftc');

    let srolllameout=0;
    const scrollstep=200;
    
    boton.addEventListener('click',function(){
        srolllameout+=scrollstep;
        
        listaproducto.style.transform=`translateX(-${srolllameout}px)`;

        if(srolllameout >= listaproducto.scrollWidth - listaproducto.clientWidth){
           srolllameout=0;
            listaproducto.style.transform ='translateX(0)';
        }
    });
});