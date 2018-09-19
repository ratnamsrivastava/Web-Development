// FadeOut effect, inspect to check what happens to <div> tag

// $('button').on("click", function() {
// 	$('div').fadeOut(1000, function() {
// 		//$(this).remove();
// 		//console.log("Fade Completed");
// 	});
// });

// FadeIn effect
// $('button').on("click", function() {
// 	$('div').fadeIn(1000, function() {
// 		//console.log("Fade Completed");
// 	});
// });

// FadeToggle effect 
// $('button').on("click", function() {
// 	$('div').fadeToggle(500, function() {
// 		//console.log("Fade Completed");
// 	});
// });

//SlideDown effect
// $('button').on("click", function() {
// 	$('div').slideDown(500, function() {
// 		//console.log("Slide is done");
// 	});
// });

// // SlideUp effect, remember to comment display:none in the HTML file
// $('button').on("click", function() {
// 	$('div').slideUp(500, function() {
// 		//console.log("Slide is done");
// 	});
// });

// SlideUp effect, remember to comment display:none in the HTML file
$('button').on("click", function() {
	$('div').slideToggle(1000, function() {
		console.log("Slide is done");
	});
});

