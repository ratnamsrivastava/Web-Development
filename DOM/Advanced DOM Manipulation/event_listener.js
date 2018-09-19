var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
	h1.style.background = "orange";
})

document.querySelector("ul").addEventListener("click", function() {
	console.log("You clicked the ul!");  // check console
})

var li = document.querySelectorAll("li")
for(var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function() {
		this.style.color = "red";
	});
}

