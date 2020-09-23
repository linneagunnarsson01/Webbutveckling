class book {
    constructor(title, author, hasRead) {
        this.title = title; // är String
        this.author = author; // är String
        this.hasRead = hasRead; // är boolean
    }

    info(){
        return this.title + " av " +  this.author; //retunerar titel av författare
    }

}

 // lista med böcker
 var list =[ 
    new book("häst", "okänd", true),
    new book("hej", "någon", false),
    new book("någonting", "vem vet", true),
    new book("hejdå","kreaktiv", false)
];


for( let i=0; i < list.length; i++ ){
    console.log(list[i].info());
}


