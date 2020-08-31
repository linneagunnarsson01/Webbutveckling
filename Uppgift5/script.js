// JavaScript

// Globala variabler
var inputElem; //tar värdet från inmatning 
var msgElem;// hämtar id elementet från html till js

var fruitNames; //skapar array med fruktnam
var fruitNr=0;//vilken frukt som är vald

var selFruitsElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");
    
    msgElem = document.getElementById("message");
    selFruitsElem=document.getElementById("selectedFruits");

    document.getElementById("btn1").onclick = showFruit;
    document.getElementById("btn2").onclick = checkName;
    document.getElementById("btn3").onclick = addFruits;
    
    fruitNames=["Ingen frukt", "äpple", "banan", "citron", "apelsin","päron" ];//fruktarray
    

} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad


//visar fruktbilden
function showFruit(){
    let nr;//matas in i txtfält
    let fruitUrl;//spara länken till bilderna

    nr=getNr(1, 5);

    if(nr !== null){

         //sätter en bild på sidan baserat på nummer som matas in i txtfält input1
        fruitUrl = "./pics/fruit" + nr + ".jpg";

        document.getElementById("fruitImg").src = fruitUrl;//skriver ut länk

        fruitNr= nr;



    }

    

    
}

//kontrollerar namn på frukt
function checkName(){

    let name;//tar in värde från txtfält input2

    name=inputElem[2].value;

    //kontrollerar om frukt är vald genom att kola om värdet är ändrat från noll
    if(fruitNr===0){
        msgElem.innerHTML="du måste välja en frukt";

        return;
    }

    //kontrollerar om man skrivit fruktens namn korrekt genom att jämföra den inmatade fruktrn och den valda frukten
    if (name === fruitNames[fruitNr]){

        msgElem.innerHTML="rätt namn";

    }else{

        msgElem.innerHTML="fel namn";
    }

}

function getNr(elemNr, high){
    let nr;

    nr=inputElem[elemNr].value;//matar in text från textfält input1
    //kontrollerar om det är ett tal
    if(isNaN(nr)){
        msgElem.innerHTML = "Inte ett tal";//om ej tal kommer texten fram för information

        return null;
    }
    //kontrollerar om talet är i intervallet eller ej

    if( nr>high || nr<1){

        msgElem.innerHTML="Välj en sifframellan ett och fem"// om inte kommer felmeddelande

        return null;

    }
    //tar bort decimaler 
    nr= parseInt(nr);

    inputElem[elemNr].value= nr;//ändrar det som står i txtfält

    return nr;
}

function addFruits(){
    let amount;
    let imgList;

    

    if(fruitNr === 0){

        msgElem.innerHTML="du måste välja en frukt";

        return;

    }

    amount=getNr(3, 9);

    if( amount !== null){

    }
}
