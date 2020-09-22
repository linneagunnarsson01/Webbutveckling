//vårt objekt
var myObject = {

   title: "mat är gott" , //receptnamn
   rating: "fem av fem" , //betyg
    //lista ingridienser
   ingredients: [
    "2 1/2 dl vetemjöl",
    "1/2 tsk salt",
    "6 dl mjölk",
    "3 ägg",
    "3 msk smör (1 msk motsvarar ca 15 g)",
    "sylt, bär eller frukt till servering"
],
 //lista steg för steg
   steps: [
    "Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen.",
    "Smält smöret i stekpannan och vispa ner i smeten. Stek tunna pannkakor av smeten i en stek- eller pannkakspanna.",
    "Servera med sylt, bär eller frukt."
],

 }
 
 console.log(myObject.title) //skriver titel
 console.log(myObject.rating) // skriver betyg

for (let i=0; i < myObject.ingredients.length; i++ ){
    console.log(myObject.ingredients[i]) //skriver ut ingridiens

}

for(let i=0; i < myObject.steps.length; i++){
    console.log(myObject.steps[i]) //skriver ut steg för steg

}





 // loop för ingridienser och steg för steg
 //loop för ingridienserna
 