// tomando control del objeto
//let plant1 = document.getElementById("plant1")

//
/*plant1.addEventListener("click", ()=>{
    let name = prompt("Hola, ¿cual es tu nombre?");
    if(name !== ""){
       alert(`${name} please, SAVE THE PLANET ! 🌱`);
}
});*/

// tomando control del objeto
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));
// Implementando la guncion drag element
function dragElement( terrariumElement ){
    // Creando Variables que controlaran las posiciones
    // las posiciones iniciales y finales 
    let pos1 = 0, // posiciones
        pos2 = 0,
        //posicion 3 graba posición en x DE MOUSE AL MOMENTO
        //de hacer un onpointerdown a un elemento 
        pos3 = 0,
         // pos4 graba posición en "y" del mouse al momento
         // de hacer onpointerdown a un elemento
        pos4 = 0

        // Registrar un evento 
    terrariumElement.onpointerdown = pointerDrag

    // UN POINTERDRAG SE EJECUTA SOLO CUANDO HAY UN ONPOINTERDRAG
    
    function pointerDrag( event ){
        // Previene todo comportamiento 
        //que tenga por defecto el evento 
        // en cuestion en mi documento
        event.preventDefault();
        // vamos a guardar la posicion inicial
        // que se tiene al momento de hacer
        // el pointerDrag
        // posiciones actuales
        pos3 = event.clientX;
        pos4 = event.clientY;
        
       // Registrando handlers para eventos
        // de arrastre
        document.onpointermove = elementDrag;
        // registrando handler para evento 
        // de liberación del botón
        document.onpointerup = stopElementDrag;

        // Creando funciones
        function elementDrag( event ){
            // Calculando la diferencia 
            // de la nueva posicion
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;
            // actualizamos posiciones originales
            pos3 = event.clientX;
            pos4 = event.clientY;

            // mover la imagen con las posiciones 
            // con las posisicones calculadas
            // de modo que la imagen quede en 
            // la nueva posicion del mouse
            terrariumElement.style.left = `${terrariumElement.offsetLeft - pos1}px`;
            terrariumElement.style.top = `${terrariumElement.offsetTop - pos2}px`;

        }

        function stopElementDrag( event){
             // Eliminando handler para evento
             // de arrastre
            document.onpointermove = null; // null ya no tiene funcion
             // Eliminando handler para evento
             // de liberación del boton
            document.onpointerup = null;
        }


   
    }
    
}