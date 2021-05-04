//for button click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

//for keyboard press

document.addEventListener('keydown', function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});



function makesound(key){
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;

    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    default:
}
}

function buttonAnimation(currentkey){
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}


/*document.querySelectorAll("button")[0].addEventListener("click",handleClick1);
function handleClick1() {
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}

document.querySelectorAll("button")[1].addEventListener("click",handleClick2);
function handleClick2() {
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play();
}
document.querySelectorAll("button")[2].addEventListener("click",handleClick3);
function handleClick3() {
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();
}
document.querySelectorAll("button")[3].addEventListener("click",handleClick4);
function handleClick4() {
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play();
}
document.querySelectorAll("button")[4].addEventListener("click",handleClick5);
function handleClick5() {
  var audio = new Audio('sounds/snare.mp3');
  audio.play();
}
document.querySelectorAll("button")[5].addEventListener("click",handleClick6);
function handleClick6() {
  var audio = new Audio('sounds/crash.mp3');
  audio.play();
}
document.querySelectorAll("button")[6].addEventListener("click",handleClick7);
function handleClick7() {
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play();
}*/
