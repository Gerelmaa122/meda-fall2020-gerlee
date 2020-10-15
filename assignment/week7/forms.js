$(document).ready(function(){
    $("#plus").click(function(){
var firstNumberString=$("#num1").val();
var secondNumberString=$("#num2").val();
 
    //var firstNumberConverted=$("#num1").val();
    //console.log(firstNumber);
    var firstNumberConverted=parseInt(firstNumberString);
    var secondNumberConverted=parseInt(secondNumberString);
    //console.log(firstNumberConverted);

    if(isNaN(firstNumberCovered) || isNaN(secondNumberConverted)){
        $("#result").html("Error:One of your number is not a number!");
        $("#result").css("color","red");
    } else {
        //console.log(firstNumberConverted);
        var sum=firstNumberConverted+secondNumberConverted;
        $("#result").html(sum);
    }
    });
});