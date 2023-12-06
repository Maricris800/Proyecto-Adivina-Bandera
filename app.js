let iniciar = document.querySelector(".boton-iniciar");
let preguntaJuego = document.querySelector("h2");
let bandera = document.querySelector("img");
let listaOpciones = document.querySelector("ul");
let respuestaCorrecta = "Argentina";
let reiniciar = document.querySelector(".reiniciar");
let contador = 0;

//recuperando los botones opciones de respuesta//
let botonOpcion = document.querySelectorAll(".boton-opcion");
let boton1 = document.querySelector("#opcion1");
let boton2 = document.querySelector("#opcion2");
let boton3 = document.querySelector("#opcion3");

//Función para ocultar el h2 y el botón, y hacer aparecer la bandera y las opciones
iniciar.addEventListener("click", () => {
  cambiarEstilo();

  evaluar();
});

function cambiarEstilo() {
  iniciar.style = "display:none";
  preguntaJuego.style = "display:none";
  bandera.style = "visibility:visible";
  listaOpciones.style = "display:flex";
}

function evaluar() {
  for (let i = 0; i < botonOpcion.length; i++) {
    botonOpcion[i].addEventListener("click", () => {
      console.log(botonOpcion[i].innerText);
      if (botonOpcion[i].innerText === respuestaCorrecta) {
        contador++;
      }
      setTimeout(cambiarImagen, 1000);
    });
  }
}

const randomMinMax = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function cambiarImagen() {
  if (banderas.length === 0) {
    console.log("Finalizado");
    document.querySelector(
      ".Aciertos"
    ).innerHTML = `<p>Correctas: ${contador}</p>
    <p>Incorrectas: ${banderasOriginal.length + 1 - contador}</p>
    `;

    bandera.style = "visibility:hidden";
    listaOpciones.style = "display:none";

    reiniciar.style = "display:block";
    /*reiniciar.style = "text-align:center";*/

    reiniciar.addEventListener("click", () => { 
        
        location.reload();    

    });

    return;
  }

  let imagenAleatoria = randomMinMax(0, banderas.length - 1);

  const [banderaEliminada] = banderas.splice(imagenAleatoria, 1);

  bandera.src = banderaEliminada.bandera;
  boton1.textContent = banderaEliminada.opciones[0];
  boton2.textContent = banderaEliminada.opciones[1];
  boton3.textContent = banderaEliminada.opciones[2];

  respuestaCorrecta = banderaEliminada.opcionCorrecta;
  console.log(respuestaCorrecta);
}
