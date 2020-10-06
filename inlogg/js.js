
let form = document.querySelector('form');

form.addEventListener('submit' , event =>{

    let krypterad =  btoa(form.elements.password.value);
    let inlog ={
        username : form.elements.username.value,
        password : krypterad
    }

    console.log(inlog);

    event.preventDefault();

    fetch('LÄNK SAKNAS',{
        method:'POST',
        headers : {'Content-Type': 'application/json'},
        body : 
            JSON.stringify(inlog)
         
    }) 
    .then((response )=>{

    })

   

});

