var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var backgroundclr=document.getElementById("grad"); 

function colorchange()
{
		backgroundclr.style.background= "linear-gradient(to right," + color1.value + ", " + color2.value + ")";	
		h3.innerHTML=backgroundclr.style.background+ ";"
}

color1.addEventListener("input",colorchange);

color2.addEventListener("input",colorchange);

