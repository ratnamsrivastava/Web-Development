// text() method

// $("h1").text(); paste these three in console
// $("ul").text();
// $("li").text();
$("h1").text("new text");
$("li").text("I am Legend")


// html() method

// $("ul").html(); paste in console
$("ul").html("<li>I hacked your ul!!</li><li>I hacked your li!!</li>");
$('li').html("<a href='https://www.google.com'>click here to go to google</a>")


// attr() method

// $("img").css("width"); type in console
$("img").css("width", "200px")
$("img").attr("src", "http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg")
// $("input").attr("type"); in console
//$("input").attr("type", "color");
$("input").attr("type", "text");
$("img:first-of-type").attr("src", "http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg")
$("img").last().attr("src", "http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg")


// val() method
$("input").val();
$("input").val("Ratnam Srivastava");
$("input").val("");
// $("select").val(); in console

// addClass() method
$("h1").addClass("correct");


// removeClass() method
$("h1").removeClass("correct");
$("li").addClass("wrong");


// toggleClass method, run the below lines separately to see the difference
$("li").toggleClass("wrong");
$("li").toggleClass("wrong");
$("li").first().toggleClass("done");
$("li").toggleClass("done");
