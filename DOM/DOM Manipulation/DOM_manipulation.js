var h1 = document.querySelector("h1");
h1.style.color = "orange";
h1.style.border = "5px blue solid";

var p = document.querySelector("p");
p.classList.add("big");
p.classList.remove("big");
// write in console
p.classList.toggle("big");
p.classList.toggle("big");


// on console, since text is changed and HTML structure is disturbed
//var para = document.getElementsByTagName("p")[0]
//para.textContent = "Labradors are really realy adorable"

//var ul = document.querySelector("ul");
//ul.textContent = "DEXTER LUCY SNOOPY WIZ"

// this does not change the underlying HTML structure, write on console
var par = document.querySelector("p");
par.innerHTML = "Labradors are <strong>really really</strong> adorable!!"

// on console
// document.querySelector("h1").textContent = "END OF THE LESSON!!"