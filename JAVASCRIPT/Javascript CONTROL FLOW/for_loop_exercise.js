console.log("Printing all values between -10 and 20");
for(var i = -10; i <= 20; i++) {
	console.log(i);
}

console.log("Printing all even values between 10 and 40");
for(var i = 10; i < 41; i += 2) {
	console.log(i);
}


console.log("Printing all odd values between 300 and 333");
for(var i = 300; i < 334; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("Printing all values between 5 and 50 that are divisible by 3 and 5 BOTH");
for(var i = 5; i <= 50; i++) {
	if((i % 3 === 0) && (i % 5 === 0)) {
		console.log(i);
	}
}