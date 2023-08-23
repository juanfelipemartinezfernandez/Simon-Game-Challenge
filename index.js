buttonColors = ["red","blue","green","yellow"];

function nextSequence(){
  randomNumber = Math.floor(Math.random()*4);
  return randomNumber;

}
sequence = [nextSequence()];
console.log(sequence[0]);

  $(".btn").on("click ", function(){
    element = ($(this).attr("id"));
    let myAudio = new Audio();

      if (element === "green") {
        myAudio.src = "./sounds/green.mp3"
      }else if (element === "red") {
        myAudio.src = "./sounds/red.mp3"
      }else if (element === "yellow") {
        myAudio.src = "./sounds/yellow.mp3"
      }else if (element === "blue") {
        myAudio.src = "./sounds/blue.mp3"
      }
      myAudio.play();

  });
