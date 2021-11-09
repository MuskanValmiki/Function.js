function SumOfNumbers(num1,num2){
    console.log(num1+num2);
    }
    SumOfNumbers(1,2);


// Defining function
function greetWorld() {
    var greet = "Hello World!";
    console.log(greet);
   }
    
   greetWorld(); // Outputs: Hello World!
    
   console.log(greet); // Uncaught ReferenceError: greet is not defined
    
//greet is a local scope so its work only inside the function body 


var greet = "Hello World!";
// Defining function
function greetWorld() {
  console.log(greet);
}
greetWorld();  // Outputs: Hello World!
console.log(greet); // Outputs: Hello World!
//here greet is a globle scope so that its work outside the fumnnction and inside the function


var isEqual = function(str1,str2){
    console.log(str1===str2)
 }
 isEqual("valmikee","muskan");
//Anonymous function