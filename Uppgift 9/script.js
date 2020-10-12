// JavaScript

// Globala variabler
 var wordList; // array med ett antal o9rd,där man sedan väljer ett slumpmässigt .
 var selectedWord; // det ord som valts slumpmässigt och som användaren ska gissa på.
 var letterBoxes; // array med referenser till de span-taggar som utgöt rutor för boxtäverna i ordet;
 var hangmanImg; //referns till img-elementet med bilden för galgen och gubben
 var hangmanImgNr; // nummer för aktuell bild (0-6) för den bildfil som visas (så man sedan kan veta vilket som blir nästa bild).
var msgElem; //referens till div-elementyet för meddelanden.

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {

	let i; // loopvariabel
	let startGameBtn = document.getElementById("startGameBtn"); // referens till startknappen
	startGameBtn.onclick = startGame;
	let letterButtons; //array med referenser till bokstavsknapparna
	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];
	

	letterButtons= document.getElementById("letterButtons").getElementsByTagName("button");
	for(i=0; i<letterButtons.length; i++) letterButtons[i].onclick = guessLetter;

// bild och element för meddelanden
	hangmanImg = document.getElementById("hangman"); // referens till img element hangmanImg
	msgElem = document.getElementById("message"); //referens till msgElem

	
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// initiera ett nytt spel, välj ord, visa bokstavsrutor.
// visa första bilden (tom bild) och sätt bildnummer till 0

function startGame(){
	hangmanImg.src = "pics/h0.png"; // visar bilden h0.png
	hangmanImgNr = 0; // variablen hangmanimgnr tillelas värdet 0
	randomWord(); // anropar funktionen randomworld
	showLetterBoxes(); // anropar funktionen showletterboxes
	


} // avslutar endgame

function randomWord(){
	let wordIndex; 

	wordIndex = Math.floor(Math.random()*wordList.length);
	console.log(wordIndex);
	selectedWord = wordList[wordIndex];


}


function showLetterBoxes(){
	let newCode;
	let i; // loopvariabel

	newCode = ""; 
	for ( i = 0; i < selectedWord.length; i++ ){
		newCode += "<span>&nbsp;</span>";	
	}

	document.getElementById("letterBoxes").innerHTML = newCode;
	letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");

}

function guessLetter(){
	let letter; // ska vara bokstaven för knappen 
	let i; //loopvariabel 
	let letterFound; // användas för flagga true/false
	let correctLettersCount; // ska vara en räknare

	letter = this.value;
	letterFound = false;

	for( i = 0; i< selectedWord.length; i++){
		if(letter === selectedWord.charAt(i)){
			letterBoxes[i].innerHTML = letter;
			letterFound = true;
		}

	}

	if(letterFound === false){
		hangmanImgNr++; // ändrar bild som visas när man skrivit fel bokstav
		hangmanImg.src = "pics/h" + hangmanImgNr + ".png";

		if(hangmanImgNr === 6){
			endgame(true);

		}

	}




}

function endgame(manHanged){
	
}