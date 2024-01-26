let mensajeOriginal = "";

 function encriptar() {
 console.log("boton");
}

function mostrarMensajeError() {
  mensajeOriginal;
  if (mensajeOriginal == "") {
    document.querySelector (
      '.tituloMensajeNoEncontrado'
    ).innerHTML = `Ningún mensaje fue encontrado`;
    document.querySelector (
        '.parrafoIngresaTexto'
      ).innerHTML = `Ingresa el texto que desees encriptar o desencriptar.`;
      
    console.log("Ingresa el texto que desees encriptar o desencriptar.");
  } else {
    document.getElementById("imagen").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    console.log(`${mensajeOriginal}`);
  }
}
mostrarMensajeError();
