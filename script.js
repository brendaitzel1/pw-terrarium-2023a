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
// Implementando la guncion drag element
function dragElement( terrariumElement ){
    // Creando Variables que controlaran las posiciones
    // las posiciones iniciales y finales 
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0
        // Registrar un evento 
    terrariumElement.onpointerdown = pointerDrag
    
    function pointerDrag( event ){
        // Previene todo comportamiento 
        //que tenga por defecto el evento 
        // en cuestion en mi documento
        event.preventDefault();
        console.log("+ On pointer down");
    }
    
}