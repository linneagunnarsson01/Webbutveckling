
// lokala och Globala variabler
//var winner;//kollar eventuell vinnare
let box = [];
let player ="red";
var raknare=0;

// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init(){

    box[1] = document.getElementById("sm1");
    box[1].onclick = changeColour;
    box[2] = document.getElementById("sm2");
    box[2].onclick = changeColour;
    box[3] = document.getElementById("sm3");
    box[3].onclick = changeColour;    
    box[4] = document.getElementById("sm4");
    box[4].onclick = changeColour;
    box[5] = document.getElementById("sm5");
    box[5].onclick = changeColour;
    box[6] = document.getElementById("sm6");
    box[6].onclick = changeColour;
    box[7] = document.getElementById("sm7");
    box[7].onclick = changeColour;
    box[8] = document.getElementById("sm8");
    box[8].onclick = changeColour;
    box[9] = document.getElementById("sm9");
    box[9].onclick = changeColour;

    

        alert("OBS! spelare ett är röd och börjar alltid."); // förklarande popup ruta

}

window.onload = init;



function changeColour(){

    raknare++;

    this.style.backgroundColor=player;
    
    if(player == "red"){

         player = "blue";

    }else{
         player = "red";
     }
                
    whoWon();
}

// skapar array för kolla om någon vann
 let winner= new Array();

//kollar om någon vunnit med hjälp av boxarna
function whoWon(){
    if((box[1].style.backgroundColor === "red" && box[2].style.backgroundColor === "red" && box[3].style.backgroundColor === "red") //kollar horisontella
    || (box[4].style.backgroundColor === "red" && box[5].style.backgroundColor === "red" && box[6].style.backgroundColor === "red")  //kollar horisontella
    || (box[7].style.backgroundColor === "red" && box[8].style.backgroundColor === "red" && box[9].style.backgroundColor === "red")){ //kollar horisontella

        alert("röd vinner");

 } else if ((box[1].style.backgroundColor === "red"&& box[4].style.backgroundColor === "red" && box[7].style.backgroundColor === "red") //kollar vertikala
   || (box[2].style.backgroundColor === "red" && box[5].style.backgroundColor === "red" && box[8].style.backgroundColor === "red") //kollar vertikala
   || (box[3].style.backgroundColor === "red" && box[6].style.backgroundColor === "red" && box[9].style.backgroundColor === "red")){//kollar vertikala

       alert("röd vinner");
       
 } else if ((box[1].style.backgroundColor === "red" && box[5].style.backgroundColor === "red" && box[9].style.backgroundColor === "red") //kollar diagonal
    || (box[3].style.backgroundColor === "red" && box[5].style.backgroundColor === "red" && box[7].style.backgroundColor === "red")){//kollar diagonal

        alert("röd vinner");

} else if ((box[1].style.backgroundColor === "blue" && box[2].style.backgroundColor === "blue" && box[3].style.backgroundColor === "blue") //kollar horisontella
|| (box[4].style.backgroundColor === "blue" && box[5].style.backgroundColor === "blue" && box[6].style.backgroundColor === "blue")  //kollar horisontella
|| (box[7].style.backgroundColor === "blue" && box[8].style.backgroundColor === "blue" && box[9].style.backgroundColor === "blue")){ //kollar horisontella

    alert("blå vinner");

} else if ((box[1].style.backgroundColor === "blue" && box[4].style.backgroundColor === "blue" && box[7].style.backgroundColor === "blue") //kollar vertikala
|| (box[2].style.backgroundColor === "blue" && box[5].style.backgroundColor === "blue" && box[8].style.backgroundColor === "blue") //kollar vertikala
|| (box[3].style.backgroundColor === "blue" && box[6].style.backgroundColor === "blue" && box[9].style.backgroundColor === "blue")){//kollar vertikala

   alert("blå vinner");

} else if ((box[1].style.backgroundColor === "blue" && box[5].style.backgroundColor === "blue" && box[9].style.backgroundColor === "blue") //kollar diagonal
|| (box[3].style.backgroundColor === "blue" && box[5].style.backgroundColor === "blue" && box[7].style.backgroundColor === "blue")){//kollar diagonal

    alert("blå vinner");

} else if(raknare===9){

    alert("oavgjort");
}



    

}
