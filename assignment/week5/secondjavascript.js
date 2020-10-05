//Datatypes
"string";
1000;
false;
//Variables
var someVariable = 100;
var isItRaining=false;
//If statements
if (someVariable > 10 ) {
    console.log("This number is higher than 10.");
    if (someVariable < 1000){
        console.log("This number is lower than 1000.");
    }
    } else { 
        console.log("This number is lower than 10.");
}

if (isItRaining == true){
    console.log("Bring an umberella");
}

//Functions
function coolFunction() {
    console.log(100);
    console.log(10); 
    console.log(1);

}

coolFunction();
coolFunction();
coolFunction();

//Arguments & Paeameters
//Arguments gtet stored inside of Parameters
//Arguments are values given to  function,and parameters are the function variables that will hold  these values.

//Parameters are written inside the parenthesis of the function DEFINITION.
function addExlamation(message,num) {
    console.log(message,"!!!",100);

    var result = num*2;
    console.log(result);
}

//Arguments are written inside the parthesis of the function CALL.
addExlamation("Hello how is going",2);
addExlamation("It is raining",7);
addExlamation("Goodbye",14);

//console.log(100,1000,"hello there");

//Returning values from functions.

//The someText variable awss created when you call the function,nut it also get destroyed when the function call ends.
function getText() {
    var someText="Nice day.";
    return someText;
}
console.log(getText());

//someText does not exist as it was destroyed when the function call ended.

var userName="Gerlee"
//Concatenation 2 zuiliig holboh 
var completeSentence = "My name is " + userName;
console.log(completeSentence);

//Type Coercion
console.log("Hello"+100);
console.log("100"+100);
console.log("This is false"+true);
//Trying to multiple a string we end up with a special Number called NAN.
var longString="Hello there"*10;
console.log(longString);


