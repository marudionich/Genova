// funciones de la nav
const nav=document.querySelector("#nav");
const abrir=document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    })

// Carrusel 
    const prevButton = document.querySelector('.carrusel-prev');
    const nextButton = document.querySelector('.carrusel-next');
    const carruselContenido = document.querySelector('.carrusel-contenido');
    const items = document.querySelectorAll('.carrusel-item');
    let index = 0;
    
    function updateCarrusel() {
        const resultado = -index * 100;
        carruselContenido.style.transform = `translateX(${resultado}%)`;
    }
    
    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarrusel();
    });
    
    nextButton.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarrusel();
    });
    
    // Inicializar el carrusel
    updateCarrusel();   

   
//me lleva a whatsaap
document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '3364223983'; 
    const message = 'Hola, me gustaría obtener más información.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}); 

//referencia al boton de acceso del registro
function acceso(){
    location.href="index.html"
}
//referencia al boton de registro del registro
function registro(){
    location.href="index.html"
    
}
//referencia al boton de volver a la pagina inicial
function volver(){
    location.href="index.html"
}
// Me pregunta si quiero abandonar la pagina
window.addEventListener('beforeunload', function(event) {
    const message = '¿Estás seguro de que quieres salir?';
    event.preventDefault();  
    event.returnValue = message; 
    return message;
});