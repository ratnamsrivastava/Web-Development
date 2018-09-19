var btn = document.querySelector("button");
var isPurple = false;
btn.addEventListener("click", function() {
	if(isPurple) {
		document.body.style.background = "white";
		isPurple = false;
	}
	else {
		document.body.style.background = "purple";
		isPurple = true;
	}
});



// OR use CSS's Style tag
// btn.addEventListener("click", function() {
// 	document.body.classList.toggle("purple");
// });