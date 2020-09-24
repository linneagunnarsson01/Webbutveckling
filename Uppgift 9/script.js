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
	let startGameBtn; // referens till startknappen
	let letterButtons; //array med referenser till bokstavsknapparna
	
	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];
	
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad
