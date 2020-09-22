let tal= Number(prompt("ange maxtal"));
let talMin= Number(prompt("ange mintal"));

// function som reunerar slumptal mellan 0-100
slump(talMin, tal);
array();

function slump(min,max){

    alert(Math.random()*(max - min) + min);
}

function array(){
     let array=[];
     
     for(let i=0; i<=10; i++ ){

        array[i]= i;
        document.write(array[i]);

     }

    }

    function arrayHundra(){
        let array=[];
        
        
        for(let i=0; i<=100; i++ ){
   
           array[i]= i;
           document.write(array[i]);
   
        }
    } 


    