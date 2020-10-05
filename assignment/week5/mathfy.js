function add(num1,num2) {
    var sum=num1 + num2;
return sum;
}

//var result=add(100.50);
//console.log(result);
//console.log(add(54,29));

function subtract(num1,num2,reverse) {
    
    if (reverse==true){
        var difference=num2 - num1;
    }else {
        var difference=num1 - num2; 
 
    }
    
return  difference;
}

function multifly(num1,num2) {
    var count=num1 * num2;
return count;
}

function divide(num1,num2) {
    var product=num1 / num2;
return product;
}

function circleArea(radius){
    var radiusSquare=multiply(radius,radius);
    var pi=Math.PI;

    var area = multifly(radiusSquare,pi);
    return area;
}
//console.log(circleArea(5));

function totalSum3Times(num1,num2){
    var firstSum=add(num1,num2);
    var secondSum=add(num2,+1,firstSum);
    var thirdsuSum=add(num2+2,secondSum);

    
    return thirdSum;
}
var result=totalSum3Times(4,5);
console.log(result);

console.log(substract(50,100,false) );
console.log(substract(50,100,true) );