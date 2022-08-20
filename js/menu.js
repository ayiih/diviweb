const menuweb = document.querySelector('.menuweb') //llamamos la clase
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(menuweb)


menuweb.addEventListener('click', ()=>{ //Evento click
    menu.classList.toggle("spread") //cada vez que toque la hamburguesa menu, le colocará la clase spread
}) 

window.addEventListener('click', e=>{  //se ejecuta cada vez que presiona cualquier parte de la pantalla, para esconder el menú visible
    if(menu.classList.contains('spread') && e.target != menu && e.target != menuweb ){ //Si es distinto al fondo del menú y distinto a la hamburguesa menuweb
            
            menu.classList.toggle("spread")
    } 
})