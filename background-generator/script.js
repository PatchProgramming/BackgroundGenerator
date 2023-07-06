let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient-background");
let currentCss = document.querySelector("h3");
console.log(currentCss);
// let colors = body.style.background;


//linear-gradient(to right, red, yellow);

function getColor(){
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	currentCss.innerHTML = `Current CSS for the body is -> `+ body.style.background;
}

color1.addEventListener("input", getColor)

color2.addEventListener("input", getColor)