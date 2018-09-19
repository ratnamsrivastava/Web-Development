function isEven(x) {
	if(x % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

// isEven Other method

// function isEven(x) {
//	return x % 2 === 0;
// }


function factorial(num) {
var fact = 1;
for(i = num; i > 0; i--){
fact *= i;
}
return fact;
}

function kebabToSnake(str) {
var myString = str.replace(/-/g, "_");
return myString;
}