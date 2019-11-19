const drag = require("electron-drag");
var character = document.getElementById("character");
var status = "idle";

drag(character);

function idle(){
    if(status === "idle"){
        character.src = "img/idle.gif";
    }
}

function shy(){
        character.src = "img/click_reaction.gif";
        character.removeEventListener("click", shy);
        character.removeEventListener("mouseover", open_mouth);
        character.removeEventListener("mouseleave", idle);
        setTimeout(function(){
            character.src = "img/idle.gif";
            applyAnimationEventListeners();
        }, 11800);
}

function open_mouth(){
    character.src = "img/open_mouth.gif";    
}

function applyAnimationEventListeners(){
    character.addEventListener("mouseover", open_mouth);
    
    character.addEventListener("mouseleave", idle);
    
    character.addEventListener("click", shy);
}

applyAnimationEventListeners();

character.addEventListener("dblclick", () => {
    if (character.style.length === 0){
        character.style = "-webkit-app-region: drag";
    } else {
        character.style = "";
    }
});