buttonColors = ["green","red","yellow","blue"];
sequence = [];
let list1 = [];
let cumple;
let i = 0;
//Funcion para agregar vlor aleatorio a la secuencia
function nextSequence(){
  randomNumber = Math.floor(Math.random()*4);
  return randomNumber;
}
//funcion para animacion al presionar boton
function pressed(color) {
  element = $("#" + color);
  element.addClass("pressed");
  setTimeout(function(){
    $("#" + color).removeClass("pressed");
  }, 250);
}
// funcion para reproducir sonido
function sonido(sonido){
  var myAudio = new Audio();
  myAudio.src = "./sounds/"+sonido+".mp3";
  myAudio.play();
}
//funcion para hacer sonar boton y animar cuando se genera numero aleatorio
function sonidoNumeroAleatorio(numero) {
  sonido(buttonColors[numero]);
  pressed(buttonColors[numero]);
}
//Funcion para empezar juego con tecla
function start(randomNumber) {
  i=0;
  list1 = [];
  sequence = [];
  $("body").one("keydown", function(event){

    sequence.push(buttonColors[randomNumber]);
    $("h1").text("Playing...");
    $(".btn").on("click", function(){
      sonido($(this).attr("id"));
      pressed($(this).attr("id"));
      list1.push($(this).attr("id"));
      if (list1.length === sequence.length) {
        console.log("LIstas iguales, enviando comparacion...");
        comparar(list1);
      }else {
            console.log("Listas no iguales");
            if (list1[i] == sequence [i]) {
              console.log("Elemento atual esta bien, usuario: " + list1[i]+ "Secuencia: "+sequence[i]);
              i++;
            }else if (list1.length == 1 && list1[0] != sequence [0]) {
              console.log("lista1 length: "+ list1.length);
              console.log("Elemento actual no esta bien, usuario: " + list1[i]+ "Secuencia: "+sequence[i]);
              Perdio();
            }
        }
    });
    sonidoNumeroAleatorio(randomNumber);
  });

}
//funcion para agregar numero a secuencia
function agregarNumeroSecuencia(randomNumber) {

  sequence.push(buttonColors[randomNumber]);
  sonidoNumeroAleatorio(randomNumber);
}
//Funcion cuando pierde la secuencia
function Perdio() {


  sonido("wrong");
  $(".btn").off("click");
  $("h1").text("You Lose, Press a Key to start again");
  $("body").addClass("game-over");

  setTimeout(function() {
  $("body").removeClass("game-over");
  start(nextSequence());
  }, 200);
  $(document).clearQueue();
  $(document).stop();
  //resetea la secuencia

  console.log("Elementos actuales en lista: "+ sequence);
  console.log("valor i: "+ i);

  //cuando oprime tecla inicia secuencia

}

function comparar(color) {
  console.log("Actual color en lista: "+sequence);
  console.log("Usuario presiono: "+color);
  for (var h = 0; h < sequence.length; h++) {
    if (sequence[h] == color[h]){
      cumple = true;

    }else {
      Perdio();
    }

  }
  if (cumple == true) {
    setTimeout(function(){agregarNumeroSecuencia(nextSequence())}, 1000);
    list1 = [];
    i = 0;

  }

}
//event listener para el click y dar sonido en el click

start(nextSequence());
