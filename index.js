buttonColors = ["green","red","yellow","blue"];
sequence = [];
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
  }, 150);
}
// funcion para reproducir sonido
function sonido(sonido){
  var myAudio = new Audio();

  myAudio.src = "./sounds/"+sonido+".mp3";
  myAudio.play();
}
//funcion para hacer sonar boton cuando se genera numero aleatorio
function sonidoNumeroAleatorio(numero) {
  sonido(buttonColors[numero]);
  pressed(buttonColors[numero]);
}


//Funcion para empezar juego con tecla
function start() {
  $("html").one("keydown", function(event){
    sonidoNumeroAleatorio(nextSequence());
    sequence = [nextSequence()];

  });
}
start();

//Funcion cuando pierde la secuencia
function Perdio() {
  $("body").addClass("game-over");
  sonido("wrong");
  setTimeout(function() {
  $("body").removeClass("game-over");
  }, 500);
//resetea la secuencia
  sequence = [];
  //cuando oprime tecla inicia secuencia
  $("html").on("keydown", function(event){
    sequence = [nextSequence()];
    });
}


//event listener para el click y dar sonido en el click
  $(".btn").on("click", function(){

    element = ($(this).attr("id"));
    if (element === "green") {
      console.log("entro green");
      // myAudio.src = "./sounds/green.mp3";
    }else if (element === "red") {
      console.log("entro red");
      // myAudio.src = "./sounds/red.mp3";
    }else if (element === "yellow") {
      console.log("entro yellow");
      // myAudio.src = "./sounds/yellow.mp3";
    }else if (element === "blue") {
      // myAudio.src = "./sounds/blue.mp3";
      console.log("entro blue");
    
    }
    else {
      Perdio();
    }
    sonido(element);
    pressed(element);




  });
