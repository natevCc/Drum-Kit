document.querySelectorAll(".drum").forEach((e) => {
    e.addEventListener("click", function() {

        playSoundFromKey(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    playSoundFromKey(event.key);
    buttonAnimation(event.key);
});

function playSoundFromKey(key) {
    switch (key) {
        case "w":
            var crashAudio = new Audio("./sounds/crash.mp3");
            crashAudio.play();
            break;
        case "a":
            var kickBassAudio = new Audio("./sounds/kick-bass.mp3");
            kickBassAudio.play();
            break;
        case "s":
            var snareAudio = new Audio("./sounds/snare.mp3");
            snareAudio.play();
            break;
        case "d":
            var tom1Audio = new Audio("./sounds/tom-1.mp3");
            tom1Audio.play();
            break;
        case "j":
            var tom2Audio = new Audio("./sounds/tom-2.mp3");
            tom2Audio.play();
            break;
        case "k":
            var tom3Audio = new Audio("./sounds/tom-3.mp3");
            tom3Audio.play();
            break;
        case "l":
            var tom4Audio = new Audio("./sounds/tom-4.mp3");
            tom4Audio.play();    
            break;
        default:
            // console.log("Couldn't find key.");
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}




// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();