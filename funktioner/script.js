let tal1= Number(prompt("ange minsta tal"));
let tal2=Number(prompt("ange största tal"));
let tal3=Number(prompt("ange tal som ska kvadreras"));
let ord=String(prompt("ange ett ord som är palindrom"))
let tal="tal";
document.write(sum(tal1 , tal2));
document.write(doCalculations(tal3 ));
document.write(math(tal));


if(palindrom(ord)){ 
    document.write("Palindrom");
}else{ document.write("Inte ett palindrom");
}

function sum(min, max)
{
    let summa=0;
    for(let i=min; i<= max; i++)
    {
        summa+=i;   
    }
    return summa;

}

function doCalculations(tal3)
{
    let summa= tal3*tal3;
    return summa;

}

function math(tal)
{
    let summa=0;
    for(let i=1; i<= 5; i++)
    {
        summa+=i*i;   
    }
    return summa;

}

function palindrom(ord)
{
    let len = ord.length;
 
    for(let i = 0; i < len/2; i++){
        if (ord[i] !== ord[len - 1 - i]) {
            return false;
        }


    }
    return true;
}




