// click listener
$("h1").click(function() {
	alert("h1 clicked");
});

$("button").click(function() {
	alert("button clicked");
});

$("button").click(function() {
	$(this).css("color", "red");
});

// See console for the codes output
$("button").click(function() {
	var text = $(this).text();
	console.log("You clicked " + text);
});


// keypress listener, type something in input to see the output

$("input").keypress(function() {
	console.log("You pressed a key");
});

$("input").keypress(function(event) {
	console.log(event);
});

$("input").keypress(function(event) {
	if(event.which === 13) {
		alert("You Hit ENTER")
	}
});


// 'on' listener

$("h1").on("click", function() {
	$(this).css("color", "purple");
});

$("input").on("keypress", function() {
	console.log("Key pressed");
});

$("button").on("mouseenter", function() {
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
	$(this).css("font-weight", "normal");
});