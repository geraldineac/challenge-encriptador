// Busca en el DOM el elemento textarea por su ID con document.getElementById
const textArea = document.getElementById("textarea");
const botonEncriptar = document.getElementById("encriptar");


// Inicia la variable de textoIngresado vacia
let textoIngresado = "";

// Event listener para el evento 'input'
textArea.addEventListener('input', function(event) {
  // Actualiza la variable textoIngresado con el valor actual del textarea
  textoIngresado = event.target.value;
  // Depuración
  console.log(`Se está ejecutando ${textoIngresado}`);
});

// Event listener para el botón encriptar
botonEncriptar.addEventListener('click', function() {
  let textoEncriptado = encriptar(textoIngresado);
  document.getElementById("resultado").textContent = textoEncriptado; // Imprime el resultado en el elemento <p>
  mostrarMensajeError();
});

//boton encriptar
function encriptar(texto) {
  let textoEncriptado = texto;
  const llaves = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

  for (const letra in llaves) {
    const reemplazo = llaves[letra];
    textoEncriptado = textoEncriptado.replaceAll(letra, reemplazo);
  }
  return textoEncriptado;
}


//Funcion reutilizada del Juego de Adivina el número del 1 al 10

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento); //Toma el elemento html ("h3" y "span")
  elementoHTML.innerHTML = texto; //Imprime los mensajes para los elementos
  return; //No es obligatorio el return pero si es una buena practica
}

//Mensaje de error ok

function mostrarMensajeError() {

  if (textoIngresado.trim() === "") {
   
    asignarTextoElemento("h3", "Ningún mensaje fue encontrado");
    asignarTextoElemento("span", "Ingresa el texto que desees encriptar o desencriptar.");
    
  } else {
    document.getElementById("imagen").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    asignarTextoElemento("h3", "");
    asignarTextoElemento("span", "");
   
  }
}
mostrarMensajeError();

// Botón copiar con la api del portapapeles
const botonCopiar = document.getElementById("copiar");

botonCopiar.addEventListener("click", function () {
  const textoResultado = resultado.innerText;
  navigator.clipboard.writeText(textoResultado)
    .then(() => {
      alert("Texto copiado al portapapeles correctamente.");
    })
    .catch((error) => {
      alert("Error al copiar texto: " + error);
    });
});
