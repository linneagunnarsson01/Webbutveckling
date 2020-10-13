// JavaScript

// Globala variabler
 var wordList; // array med ett antal o9rd,där man sedan väljer ett slumpmässigt .
 var selectedWord; // det ord som valts slumpmässigt och som användaren ska gissa på.
 var letterBoxes; // array med referenser till de span-taggar som utgöt rutor för boxtäverna i ordet;
 var hangmanImg; //referns till img-elementet med bilden för galgen och gubben
 var hangmanImgNr; // nummer för aktuell bild (0-6) för den bildfil som visas (så man sedan kan veta vilket som blir nästa bild).
 var msgElem; //referens till div-elementyet för meddelanden.
 var startGameBtn; //startknapp
 var letterButtons;// bokstavsknapp
 var startTime; //ska mäta tid

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {

	let i; // loopvariabel
	startGameBtn = document.getElementById("startGameBtn"); // referens till startknappen
	startGameBtn.onclick = startGame;
	letterButtons; //array med referenser till bokstavsknapparna


	
	wordList = ["BLOMMA","LASTBIL" ,"SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
	"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
	"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];
	

	letterButtons= document.getElementById("letterButtons").getElementsByTagName("button");
	changeButtonActivation(true); // letterbuttons inaktiverad och startGameBtn är akriverad
	

// bild och element för meddelanden
	hangmanImg = document.getElementById("hangman"); // referens till img element hangmanImg
	msgElem = document.getElementById("message"); //referens till msgElem

	
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// initiera ett nytt spel, välj ord, visa bokstavsrutor.
// visa första bilden (tom bild) och sätt bildnummer till 0

function startGame(){

	let now;	 

	changeButtonActivation(false); //  startGameBtn inaktiverad och letterbuttons är akriverad
	hangmanImg.src = "pics/h0.png"; // visar bilden h0.png
	hangmanImgNr = 0; // variablen hangmanimgnr tillelas värdet 0
	randomWord(); // anropar funktionen randomworld
	showLetterBoxes(); // anropar funktionen showletterboxes
	msgElem.innerHTML = ""; // tom textsträng

	now = new Date();
	startTime = now.getTime(); // startar tidräkning


} // avslutar startgame

function randomWord(){
	let wordIndex; 
	let oldWord;

	oldWord = selectedWord; // ger variabelen oldWord tilldelat värde ifrån selecedtword

	while(oldWord === selectedWord){

	wordIndex = Math.floor(Math.random()*wordList.length); //slumpar ett tal mellan 0 och antalen ord i wordList
	console.log(wordIndex); // sparar valt ord
	selectedWord = wordList[wordIndex]; // ger variablen selectedWorldd ett tilldelat värde
	}
	
} // avslutar randomWord


function showLetterBoxes(){
	let newCode;
	let i; // loopvariabel

	newCode = ""; //textsträng med html-kod
	for ( i = 0; i < selectedWord.length; i++ ){ 
		newCode += "<span>&nbsp;</span>"; // används för att kunna ha "tom ruta" för css-filen ska fungera
	}

	document.getElementById("letterBoxes").innerHTML = newCode;
	letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");

} //avslutar showLetterBoxes

//f8unktionen kontrolerar vad väljaren väljer för bokstav jentimot ordet
function guessLetter(){
	let letter; // ska vara bokstaven för knappen 
	let i; //loopvariabel 
	let letterFound; // användas för flagga true/false
	let correctLettersCount; // ska vara en räknare
	this.disabled = true;
	letter = this.value; //bokstaven finnes i value-atributet
	letterFound = false;
	
	correctLettersCount = 0;
	//loop för att kontrollera bokstäverna och går igenom alla tecken i selectedWord
	for( i = 0; i< selectedWord.length; i++){
		if(letter === selectedWord.charAt(i)){ // ifsats som jämför letter med tecken i selectedWord som bestämms i loopvariablen i
			letterBoxes[i].innerHTML = letter;
			letterFound = true;
			
		}

		if (letterBoxes[i].innerHTML != "&nbsp;"){ // lägger in bokstaven i rätt ruta om bokstaven stämmer överrens med den som ska vara i rutan
			correctLettersCount++;
		}
	}

	if(letterFound === false){ // om bokstaven ej finnes i ord ska bild bytas
		hangmanImgNr++; //ökar bildnummret med ett
		hangmanImg.src = "pics/h" + hangmanImgNr + ".png"; // ändrar bild som visas när man skrivit fel bokstav

		if(hangmanImgNr === 6){  // om bild nummer 6 kommer upp avslutas spelet med hängd gubbe
			endgame(true);

		}
	}
	else if(correctLettersCount === selectedWord.length){ // kollar om alla bokstäver är klara i såna fall avslutas spelet med vinst
		endgame(false);
	}




}

// skriver ut om man vann eller förlorade, tar true/falseparameter ifrån föregående forloop.
function endgame(manHanged){

	let now;
	let runTime;

	now = new Date();
	runTime = (now.getTime() - startTime) / 1000;

	changeButtonActivation(true); // letterbuttons inaktiverad och startGameBtn är akriverad

	if(manHanged === true){
		msgElem.innerHTML = "Gubben blev hängd " + selectedWord + " var korrekt ord." + " " + runTime.toFixed(1) + "blev tiden";  // Skriver ut gubben blev hängd och vilket ord som efterfrågades 
	} else {
		msgElem.innerHTML = "Grattis du listade ut att ordet var " + selectedWord + ".  " + runTime.toFixed(1) + "blev tiden"; ; // skrivet ut grattis och vilket ordet var
		
	}

	
} // avslut på funktion endgame

function changeButtonActivation(status){
	if (status === true){
		startGameBtn.disabled = false; // knapp aktiverad
		
		for(i=0; i<letterButtons.length; i++){ 
			letterButtons[i].onclick = guessLetter;
			letterButtons[i].disabled = true; // knapp inaktiverad
		}
	} else {
		startGameBtn.disabled = true; // knapp inakiverad

		for(i=0; i<letterButtons.length; i++){ 
			letterButtons[i].onclick = guessLetter;
			letterButtons[i].disabled = false; // knapp aktiverad
		}
	}
}