
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
function igual() {
var contenido = document.getElementById("pantalla").innerHTML;
separadorPartes(contenido);
}


function separadorPartes(pantalla){
  //Funcion que separa los datos introducidos, en los dos valores a operar
  for (var i = 0; i < pantalla.length; i++) {
    if(pantalla.charAt(i) == '+' || pantalla.charAt(i) == '-' || pantalla.charAt(i) == '*' || pantalla.charAt(i) == '/'){
    var numerosIzq = parseFloat(pantalla.substring(0, i));
    var numerosDer = parseFloat(pantalla.substring(i+1, pantalla.length));
    console.log(numerosIzq +","+ numerosDer); //logea a consola para comprobar que detecta bien los numeros
    calcular(numerosIzq, numerosDer, i, pantalla);
  }
}
}

function calcular(numerosIzq, numerosDer, i, pantalla){
//funcion que hace los calculos segun lo introducido, actualiza la pantalla con el resultado y muestra el resultado en el historial
switch(pantalla.charAt(i)){
case '+':
  document.getElementById("pantalla").innerHTML = parseFloat(numerosIzq+numerosDer);
  document.getElementById("salida").innerHTML += numerosIzq+" + "+numerosDer+" = "+parseFloat(numerosIzq+numerosDer)+"<br>";
  break;
case '-':
  document.getElementById("pantalla").innerHTML = parseFloat(numerosIzq-numerosDer);
  document.getElementById("salida").innerHTML += numerosIzq+" - "+numerosDer+" = "+parseFloat(numerosIzq-numerosDer)+"<br>";
  break;
case '*':
  document.getElementById("pantalla").innerHTML = parseFloat(numerosIzq*numerosDer);
  document.getElementById("salida").innerHTML += numerosIzq+" * "+numerosDer+" = "+parseFloat(numerosIzq*numerosDer)+"<br>";
  break;
case '/':
  document.getElementById("pantalla").innerHTML = parseFloat(numerosIzq/numerosDer);
  document.getElementById("salida").innerHTML += numerosIzq+" / "+numerosDer+" = "+parseFloat(numerosIzq/numerosDer)+"<br>";
  break;
}

}

//esta funcion vacia el historial cuando la llamamos
function limpiar_historial(){
  document.getElementById("salida").innerHTML = "";
}