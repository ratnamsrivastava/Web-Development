var age = Number(prompt ("What is your age?"));
if (age < 0) {
console.log("Age must be greater than zero");
}
else if (age === 21) {
console.log("happy 21st birthday!!");
}
else if (age % 2 !== 0) {
console.log("your age is odd");
}
else if ((age % Math.sqrt(age) === 0)) {
console.log("perfect square");
}
else {
console.log()
}