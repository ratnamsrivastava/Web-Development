var h1 = document.querySelector("h1");  // Select
h1.style.color = "orange";  // Manipulate

var body = document.querySelector("body");  // Select
var isBlue = false;

setInterval(function() {  // Manipulate
	if(isBlue) {
		body.style.background = "white";
	}
	else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 1000);