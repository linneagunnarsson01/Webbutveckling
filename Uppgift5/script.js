// JavaScript

// Globala variabler
let inputElem;
let msgElem;


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");
    msgElem = document.getElementById("message");
    document.getElementById("btn1").onclick = showFruit;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit(){
    let nr;
    let fruitUrl;

    nr=inputElem[1].value;

    if(isNaN(nr)){
        msgElem.innerHTML = "Inte ett tal";
        return;
    }

    

    fruitUrl = "./pics/fruit" + nr + ".jpg";
    document.getElementById("fruitImg").src = fruitUrl;


    
}