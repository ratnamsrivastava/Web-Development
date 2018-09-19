var comments = {};
comments.data = ["Good", "Bad", "Ugly"];
console.log(comments.data)

// Without using "this"
function print(arr) {
	arr.forEach(function(el) {
		console.log(el)
	});
}
print(comments.data)

// Using "this" keyword
comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	});
}

comments.print()