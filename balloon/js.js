
let p = document.querySelector("p");
let size;

function Size(changeSize){
    size = changeSize;
    p.style.fontSize = size + "px";

}

Size(50);

function Pil(event){
    if (event.key === "ArrowUp"){

        // Om size( motsvarar ballongens storlek) blir stärre än 400 px kommer den byta till explotionemoley
        if(size> 400){
            p.textContent = "💥";

            document.body.removeEventListener("keydown", Pil);
            // om inte size är över 400 px kommer ballongens storlek öka med 10% om användaren trycker arrowUp
        }else {
            Size(size *1.1); // Ökar ballongens storlek med 10% när användaren anänder ArrowUp
            event.preventDefault();
        }

     // om inte size är över 400 px kommer ballongens storlek minska med 10% när användaren trycker ArrowDown
    }else if(event.key === "ArrowDown"){
        Size(size * 0.9); //Minskar ballongens storlek med 10% när användaren tar ArrowDown
        event.preventDefault();
    }

}

document.body.addEventListener("keydown", Pil);

