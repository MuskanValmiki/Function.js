//normal function
function addNumbers(parameter1, parameter2) {
    console.log(parameter1,parameter2)
   }
    
   addNumbers("hello","muskan");

// Function Expressions ( Anonymous function )
function getSum(num1, num2) {
    var total = num1 + num2;
    return total;
   }
console.log(getSum(1,2)) 

//Self-Invoking Functions ( Immediately invoked function expression)
(function () {
    var x = "Hello!! Muskan";  // I will invoke myself
    console.log(x);
   })();