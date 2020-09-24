
var uppgifter = [
    "./Uppgift 4/index.htm",
    "./Uppgift5/index.htm",
    "./uppgift 6/index.html",
    "./Uppgift 8/index.html",
    "./Uppgift 9/index.html",
    "./laslista objekt klasser./index.html",
    "./funktioner/index.html",
    "./funktion och math/index.html",
    "./del 5 objekt klasser/inxex.html"


];



//kallar på funktinen 
window.onload = doBtn;

function sections(index, uppgifter ){

    let knapp = document.createElement("a");
    knapp.setAttribute("id", "newButton" + index);
    knapp.setAttribute("class", "button");
    knapp.setAttribute("href", uppgifter);
    document.getElementById("navbar").appendChild(knapp);
    knapp.innerHTML = "uppgift " + uppgifter;
}


function doBtn(){
    for(let i=0; i< uppgifter.length; i++ ){
        sections( i, uppgifter[i]);

    }

}