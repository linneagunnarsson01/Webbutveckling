//vårt objekt
var myObject = {

   title: "mat är gott" , //receptnamn
   rating: "fem av fem" , //betyg
   servings: "4 pers", //portioner
    //lista ingridienser
    ingredients: {
        ingredient:["vetemjöl", "salt", "mjölk", "ägg", "smör",  "sylt, bär eller frukt till servering" ], // array med ingridienserna
        amount:["2 1/2 dl", "1/2 tsk", "6 dl","3", "3 msk", "" ] // array med mängd ingridienser
   
   },
 //lista steg för steg
   steps: [
    "Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen.",
    "Smält smöret i stekpannan och vispa ner i smeten. Stek tunna pannkakor av smeten i en stek- eller pannkakspanna.",
    "Servera med sylt, bär eller frukt."
    ],

}
 
console.log(myObject.title) //skriver titel
console.log(myObject.rating) // skriver betyg

for (let i=0; i < myObject.ingredients.ingredient.length; i++ ){
    console.log(myObject.ingredients.amount[i] +" "+ myObject.ingredients.ingredient[i]) //skriver ut mängd sen ingridiens
    

}

for(let i=0; i < myObject.steps.length; i++){
    console.log(myObject.steps[i]) //skriver ut steg för steg

}
 