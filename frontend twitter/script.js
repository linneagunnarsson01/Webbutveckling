
let form = document.querySelectorAll("form");

/*gör så man kan skapa användare*/ 
form[0].addEventListener("submit", event=>{
    saveData();
    event.preventDefault();
});

/** inloggning */
form[1].addEventListener("submit", event=>{
    logIn();
    event.preventDefault();
});

/**funktion skapa användare */
function saveData(){
    
    let createUser = form[0].elements.skapaAnvandarnamn.value;
    let createPassword = form[0].elements.skapaLosenord.value;

    createPassword = window.btoa(createPassword);
/**jsondata */
    let data = {
        "anvandarnamn" : createUser,
        "losenord" : createPassword 
    };


    console.log(data);
    uploadUser(data);

    
}

/**/ 
function uploadUser(data){
    fetch('http://localhost:8080/twitter/api/user', {
        method: 'POST',
        mode:'cors',
        header:{
            'Content-Type' : 'text/plain'
        },
        body: JSON.stringify(data)
    });
    /*.then(response => response.json())
    .then(data=>{
        console.log("Lyckat", data);
    });*/
    /*.catch((error)=>{
        console.error("Fel", error);
    });*/
}



