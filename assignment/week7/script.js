$(document).ready(function (){
 setTimeout(function(){
    var myBox = $("#box");//jQuery();
    myBox.css("background-color","pink") ;
 },3000);

 setTimeout(function(){
    var myBox = $("#box");//jQuery();
    myBox.css("background-color","gray") ;
//$("#box").css();
///$("#box").css();
},6000);

var purpleButton=$("#purple-button");
purpleButton.click(function(){
    //console.log("hello");
    $("#box").css("background-color","purple");
   });
 var greenButton=$("#green-button");
 greenButton.click(function(){
//console.log("clicked");
//var brownButton=$("#brown-button");
$("#box").css("background-color","brown");
     $("#green-button").css("background-color","black");
     $("#green-button").css("color","white");
     $("#yellow-button").css("background-color","red");
 });
 $("#yellow-button").click(function(){
     $("#box").css("background-color","yellow");
     //console.log("clicked");
 });
 $("body").click(function(){
    $("body").css("background-color","pink");

 });
  
});