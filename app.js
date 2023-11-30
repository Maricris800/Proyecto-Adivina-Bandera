let iniciar = document.querySelector(".boton-iniciar");
let preguntaJuego = document.querySelector("h2");
let bandera = document.querySelector(".contenedor-imagenes");
let listaOpciones = document.querySelector("ul");

console.log(iniciar.innerHTML);
console.log(preguntaJuego.innerHTML);

//Función para ocultar el h2 y el botón, y hacer aparecer la bandera y las opciones
iniciar.addEventListener("click", () =>{
    cambiarEstilo();

});

function cambiarEstilo(){
    iniciar.style = "display:none";
    preguntaJuego.style = "display:none";
    bandera.style = "visibility:visible";
    listaOpciones.style = "display:flex";
}