var secretNumber = 89;
var guess = Number(prompt("Guess a number"));

if(guess === secretNumber) {
	alert("you guessed it right!");
}
else if(guess < secretNumber) {
	alert("too low");
}
else {
	alert("too high");
}