//while loop

if(true) {

}
 var counter=0;

while(counter < 10) {
    //Run code While the condition is true.
    console.log("Running");
    counter=counter+1;
}
// do while loop
do {
    //This line will always run least 1 time ,because we execute the code first and then we check the condition.
} while(false);

// for loop

for (var i =0; i< 10; i=i+1) {
    console.log("Running");
    console.log(i);
}
// shorthands
var someNumber=10;
someNumber++;// someNumber=someNumber+1;
someNumber--;//someNumber=someNumber-1;
someNumber+=2;//someNumber=someNumber+2;
someNumber-=2;//someNumber=someNumber-2;
someNumber/=3;//someNumber=someNumber/3;
someNumber*=3;//someNumber=someNumber*3;
//  /=  *=

//Break and continue;

//Break is for stopping the after if.
for (var i =0; i<10; i++){
    console.log("Running with break keyword.")
   
    if (i==6) {
        break;
    }
}
//Continue,once the continue keyword is executed, the rest the code in Current loop will not run and will move next iteration of loop.
for (var i =0; i<10; i++) {
    continue;
    console.log("running with continue keyword.");
}
