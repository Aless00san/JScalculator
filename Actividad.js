
//con esta funcion añadimos el contenido del boton a la pantalla
function myFunction(obj) {
    var y = document.getElementById("pantalla");
    var id = obj.id;
    pantalla.innerHTML += id;
  }
//esta funcion limpia la pantalla (por si nos equivocamos)
function limpiar() {
  document.getElementById("pantalla").innerHTML = "";
  }

//esta funcion se ejecuta cuando pulsamos igual, manda lo que tengamos en pantalla a la salida
function calculate() {
var contenido = document.getElementById("pantalla").innerHTML;
document.getElementById("salida").innerHTML += contenido +"<br>";
divisorCalculo(contenido);
}

function divisorCalculo(pantalla){
  for (var i = 0; i < pantalla.length; i++) {
    if(pantalla.charAt(i) == '+'){
    alert(pantalla.charAt(i));
  }
}
}