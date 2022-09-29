

// Detecting button press 
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Detecting keyboard press 
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound (key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/main_1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/main_2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/main_3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/main_4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/main_5.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/main_6.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/main_7.mp3");
            tom1.play();
            break;


        default: console.log(buttonInnerHTML);
            break;
    }
}

// keydown instead of keypress



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}






























