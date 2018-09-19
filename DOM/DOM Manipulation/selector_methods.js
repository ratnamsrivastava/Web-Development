// GET ELEMENTS BY ID, there is only 1 ID in every page

var tag = document.getElementById("highlight");
// type tag in console
// console.dir(tag) on console


// GET ELEMENTS BY CLASS NAME

var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);
console.log(tags[1]);
// try running forEach by writing tags.forEach in the console
// also try console.dir(tags[0] or tags[1])
// try tags.length in console


// GET ELEMENTS BY TAG NAME
var tags = document.getElementsByTagName("li");
console.log(tags[0]);
// type this in console
var tags = document.getElementsByTagName("h1");
tags
console.dir(tags)

// QUERY SELECTOR, always returns only one element,i.e the first match
var tag = document.querySelector("#highlight");
console.log(tag);

var tags = document.querySelector(".bolded");
console.log(tags);

var tag = document.querySelector("h1")
console.log(tag);

var tags = document.querySelector("ul li.bolded");
console.log(tags);


// QUERY SELECTOR ALL, returns a list of all the objects unlike QUERY SELECTOR
var tag = document.querySelectorAll("ul li.bolded");
console.log(tag);
console.dir(tag);

var tags = document.querySelectorAll("h1")
console.log(tags);
console.dir(tags);