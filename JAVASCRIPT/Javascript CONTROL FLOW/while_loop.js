console.log("Printing all values between -10 and 20");
var counter = -10;
while (counter < 20) {
	console.log(counter);
	counter++;
}

console.log("Printing all even values between 10 and 40");
var counter = 10;
while (counter <= 40) {
	console.log(counter);
	counter+=2;
}

console.log("Printing all odd values between 300 and 333");
var n = 300;
while(n < 334)
{
	if(n % 2 != 0) {
		console.log(n);
	}
	n++;
}

console.log("Printing all values between 5 and 50 that are divisible by 3 and 5 BOTH");
var n = 5
while(n <= 50) {
	if ((n % 3 == 0) && (n % 5 ===0)) {
		console.log(n);
	}
	n++;
}