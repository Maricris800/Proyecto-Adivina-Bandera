let iniciar = document.querySelector(".boton-iniciar");
let preguntaJuego = document.querySelector("h2");
let bandera = document.querySelector("img");
let listaOpciones = document.querySelector("ul");
let respuestaCorrecta = "Argentina";
let contador = 0;
 


//recuperando los botones opciones de respuesta//
let botonOpcion = document.querySelectorAll(".boton-opcion");
let boton1 = document.querySelector("#opcion1");
let boton2 = document.querySelector("#opcion2");
let boton3 = document.querySelector("#opcion3");

//Función para ocultar el h2 y el botón, y hacer aparecer la bandera y las opciones
iniciar.addEventListener("click", () =>{
    cambiarEstilo();
    
    evaluar();
    
    
});

function cambiarEstilo(){
    iniciar.style = "display:none";
    preguntaJuego.style = "display:none";
    bandera.style = "visibility:visible";
    listaOpciones.style = "display:flex";    
}

function evaluar(){  
        
   
    for (let i=0; i < botonOpcion.length; i++){
         
       botonOpcion[i].addEventListener("click", () =>{
            console.log(botonOpcion[i].innerText);
            if (botonOpcion[i].innerText === respuestaCorrecta){
                contador++;                  
            } 
            setTimeout(cambiarImagen,2000);
       }); 
              
    }   
}


function cambiarImagen(){

    let imagenAleatoria = Math.floor(Math.random()*11);

    bandera.src = banderas[imagenAleatoria].bandera;
    boton1.textContent = banderas[imagenAleatoria].opciones[0]; 
    boton2.textContent = banderas[imagenAleatoria].opciones[1];
    boton3.textContent = banderas[imagenAleatoria].opciones[2];

    respuestaCorrecta = banderas[imagenAleatoria].opcionCorrecta;
    console.log(respuestaCorrecta);
}