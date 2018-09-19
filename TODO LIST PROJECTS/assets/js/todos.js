// Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
	// 	// if li is gray
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 	// turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});

	// }
	// //else
	// else {
	// 	// turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
	
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// adding listener to the input tag
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// getting new todo text from input
		var todoText = $(this).val();
		// to clear text in the input tag automatically
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});


$("h1").on("click", ".fa-plus", function() {
	$("input[type='text']").fadeToggle();
});