var myObject = {
    id:"123456'",
    firstName: "Rob",
    lasName:"Smith",
    address: ["123 Main St.", "123 clement ave"],
    age:45,
    title:"Engineer"

};
var myArray=["Rob","Smith","123 Main St.", 45,"Engineer"];

var months={
    firstMonth:"January",
    secondMonth:"February"
}

myArray.length;
myArray[0];
myObject.address;
console.log(myObject.address);
myObject["first Name"]; // how to access key with space in it.

var myEmployees = [];

myEmployees.push(myObject);

mySecondEmployee ={
    firstName:"Dan",
    lastName:"Lincoln",
    address:"123 Main St.",
    age:32,
    title:"CEO"
};
myThirdEmployee= { 
    firstName : "Jonh",
    lastName :"Doe",
    address: "567 geary St.",
    age:32,
    title:"account"

}
myEmployees.push(mySecondEmployee,myThirdEmployee);

console.log(myEmployees);

var totalAges = 0;

for (var i = 0; i < myEmployees.length; i = i + 1) {
   totalAges = totalAges + myEmployees[i].age;
}
    var averageAge=totalAges / myEmployees.length;
    console.log((32+45)/2);

    //Function inside of object , Arrays, and Variables.

    var something = 100;
    // Defination of a function.
    function someFunction() {
         console.log("I'm a function");
        
    }
    var storedFunction=someFunction;

    // We are not calling someFunction, instead we are passing the defination of someFunction by putting parenthesis after the variable call.
    storedFunction();
    // we didn't get rid off
    someFunction();

    var runforEachEmployee = function(employee){
 console.log("Hello "+ employee.firstName);
    };
    myEmployees.forEach(runforEachEmployee);
  var specialObject = {
      dosomework: function() {
          console.log("working!");
      }
  };
  // Runs the function stored in the key ""
  specialObject.dosomework();
  console.log();
  myEmployees.length;

  // An object's property holds data.
  //An object's method holds a function(that belongs to that object).

  var myArray2 = [
      100,
      200,
      function() {
          console.log("Hello");
      },
      400
  ]; 
  myArray2[2]();// Runs th efunction in the Array index 2.
