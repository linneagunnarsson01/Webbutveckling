class book {
    constructor(title, author, hasRead) {
        this.title = title; // är String
        this.author = author; // är String
        this.hasRead = hasRead; // är boolean
    }

    info(){

        if(this.hasRead== true){
            return " Jag har läst " + this.title + " av " + this.author;

        }else{
            return " Jag har ännu inte läst " + this.title + " av " + this.author;

        }

        //return "Jag har läst" + this.title + " av " +  this.author + ; //retunerar titel av författare
    }

}

 // lista med böcker
 var list =[ 
    new book("häst", "okänd", true),
    new book("hej", "någon", false),
    new book("någonting", "vem vet", true),
    new book("hejdå","kreaktiv", false)
];

//loop för att skriva ut listan från arrayn
for( let i=0; i < list.length; i++ ){
    console.log(list[i].info());
}


