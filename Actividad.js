
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

function calculate() {
var contenido = document.getElementById("pantalla").innerHTML;
document.getElementById("salida").innerHTML += contenido +"<br>";
}

function divisorCalculo(pantalla){
  for (var i = 0; i < pantalla.length; i++) {
    alert(pantalla.charAt(i));
  }
}