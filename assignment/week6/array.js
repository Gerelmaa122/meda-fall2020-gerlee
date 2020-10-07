var myVar = 100;

myVar = 200;

myVar = 100;

var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday","Sunday"];

var months=[
    "january"
];

var mixedArray=[100,"hello there",true]

console.log(weekdays[1]);

console.log(mixedArray[1]);

mixedArray[1] = "Hello there!" ;

console.log(mixedArray);

mixedArray[3] = 1005;

console.log(mixedArray);

mixedArray[1]=null;

console.log(mixedArray);

//Array Methods

//mynonExistingFunction();
//Array Push nemeh
var emptyArray=[];
 emptyArray.push("this is the first item");

console.log(emptyArray);

emptyArray.push(10000);

emptyArray.push(false);

console.log(emptyArray);

// Array Pop

emptyArray.pop();
console.log(emptyArray);

emptyArray.pop();
emptyArray.pop();

console.log(emptyArray);


// Array Unshift

weekdays.unshift("superday");
console.log(weekdays);

//Array Shift ,removes the first value of array.
weekdays.shift();
console.log(weekdays);

//  Array ForEach

/* ListOfItemsArray.forEach(function(eachitem) {

}); */

weekdays.forEach(function(weekday) {
    console.log(weekday);
} );

// Loops and Arrays

var setOfNumbers =[1,10,100,1000,10000];

for(var i=0;i <setOfNumbers.length; i=i+1){
    var product = setOfNumbers[i]*6;
    console.log(product);
}
//console.log(setOfNumbers[0]*6);

// Array within Array AKA multidimensional array.

var masterArray = [
    [10,29],
    [14,20],
    [50,13]
];
masterArray[1].length;
masterArray[2][0]; //This will grab the number 50 from the third array inside of this array.


