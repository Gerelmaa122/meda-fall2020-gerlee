// Remember what we previously had ,starts with no asterisks

var column = "";
for (var i = 0;i < 10;i = i + 1) {
  column = column + "**"; 
  // We console.log what the column is currently holding.
    console.log(column);
}

var string="This is a sentence.";

var stringArray=string.split("");

console.log(stringArray);

stringArray.pop();

console.log(stringArray);

stringArray.join("!");

console.log(updatedString);

var updatedString = stringArray.join("");

console.log(updatedString);
var firstMatch = -1;
for (var i = 0; i < stringArray.length; i = i + 1) {

   var currentLetter=stringArray[i];
  if(currentLetter === "e") {
     console.log("We found an e!");
      
      // firstMatch=i;// This will save the index number of match,so it can be used letter,after the loop is done.

      // stringArray[i] = "E";
    //  continue;// This will ignore the following code and move on with the rest of the loop.
for(var i=0;i<10; i++) {
  colmn=column+"*";
  console.log(column);
}
}
}
  
     ////console.log("No e here!");
//}
//if (firstMatch === -1) {
  //console.log("We did not  find any ");
//} else {

//}
//console.log(stringArray.join(""));

//var columnArray = column.split(" ");


//console.log(columnArray);

////columnArray.pop();
//console.log(ColumnArray);
//varupdatedColumn=columnArray.join("");
//console.log(updatedColumn);


for (var i=0;i<10;i++) {
  var columnArray=column.split("");
  columnArray.pop();
  column=columnArray.join("");
  console.log(column);
}