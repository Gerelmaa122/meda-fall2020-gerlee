$(document).ready(function() {
   setTimeout(function(){
       $("body").append("<div id='content'></div>");
$("div#content").html("<p>Nice weather!</p>");
$("div#content").html("<p>Hello my friends!</p><br/>")
 $("body").prepend("<h1>This page is nice!</h1>");
  //.prepends, is the same as .append, expect
},5000);
var myFavFood="Bento";
var newHTMLCode=

     $("body").append(`<ul>
            <li>${myFavFood}</li>
            <li>Dessert</li>
            <li>Buuz</li>
            </ul>`);

            $("body").append(newHTMLCode);
            $("button#create-box").click(function(){
$("but").hide();
//hide-> visually hides elements,code still exists.
//.empty() ->removes children code.
     $("body").append(`<div style='width:100px;
     height:100px; border:1px black solid;'></div>`);
    });
});