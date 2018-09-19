// COME UP WITH 4 DIFFERENT WAYS TO SELECT THE FIRST <p> TAG
var tag = document.getElementById("first");
console.log(tag);

var tags = document.getElementsByClassName("special")[0];
console.log(tags);

var tags1 = document.querySelector(".special");
console.log(tags1);

var tags2 = document.getElementsByTagName("p")[0];
console.log(tags2);

var tags3 = document.querySelectorAll(".special")[0];
console.log(tags3);

var tags4 = document.querySelector("h1 + p");
console.log(tags4);