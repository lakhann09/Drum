
// -------------- Detected by button press --------------//

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML; //capture the inner html of the button clicked

        addSound(buttonInnerHtml); 
        buttonAnimation(buttonInnerHtml);
    });
  
}

//----------------detected by keyboard pr----------------// 

document.addEventListener("keypress", function (event) {

    addSound(event.key);
    buttonAnimation(event.key);
    
});

// ================ Callback funtion ===================//

function addSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s" :
            var tom2 = new Audio("/sounds/tom-3.mp3");
            tom2.play();
            break;

        case "d" :
            var tom2 = new Audio("/sounds/tom-4.mp3");
            tom2.play();
            break;

        case "j" :
            var snare = new Audio("/sounds/snare.mp3");
            snare.play();
            break;

        case "k" :
            var crash = new Audio("/sounds/crash.mp3");
            crash.play();
            break;

        case "l" :
            var kick = new Audio("/sounds/kick-bass.mp3");
            kick.play();
            break;


        default: alert("Wrong key");

    }
};


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    var myTimeout = setTimeout(myGreeting, 100);

    function myGreeting() {
      activeButton.classList.remove("pressed")
    }

}
