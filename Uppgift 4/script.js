
let input1Element, input2Element, resultatElement;
function init()
{
    input1Element=document.getElementById("input1");
    input2Element=document.getElementById("input2");
    resultatElement=document.getElementById("result");
    document.getElementById("runBtn").onclick=doCalculations;
}
window.onload=init;
function doCalculations ()
{
    let length;
    let width;
    let area;
    let distance;
    let rektangel;
    let triangel;
    let unit=["steg", "fot", "tum"];
    let conv=[90,30.48,2.54];
    length=Number(input1Element.value);
    width=Number(input2Element.value);
    area= length*width;
    resultatElement.innerHTML+="<p> Rektanglens area blir" +area+ "m<sup>2</sup>.</p>";
    area= 3.14159* length*width/4;
    resultatElement.innerHTML+="<p> Ellipens area blir" +area+ "m<sup>2</sup>.</p>";
    resultatElement.innerHTML+="<p> längden" +length+ "meter blir</p>";
    distance= length/ conv[0]*100;
    resultatElement.innerHTML+="<p>" +distance+"  "+ unit[0] +"</p>";
    distance= length/ conv[1]*100;
    resultatElement.innerHTML+="<p>" +distance+"  "+ unit[1] +"</p>";
    distance= length/ conv[2]*100;
    resultatElement.innerHTML+="<p>" +distance+"  "+ unit[2] +"</p>";
    rektangel= length*1.5*(width+3);
    resultatElement.innerHTML+="<p> om rektangelens längd blir 50% längre och bredden 3 meter längre blir arean" +rektangel+"m<sup>2</sup>.</p>";
    triangel= length/conv[1]*100*width / conv[1]*100/2;
    resultatElement.innerHTML+="<p> om trianglens area ska räknas i kvadratfot blir det " +triangel+"</p>";
}

