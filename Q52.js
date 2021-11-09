var isEqual = function(str1,str2){
    console.log(str1===str2)
 }
 isEqual("valmikee","muskan");
//Anonymous function

(function () {
    var x = "Hello!! Muskan";  // I will invoke myself
    console.log(x);
   })();
//Self-Invoking Functions ( Immediately invoked function expression)


(function(str1,str2){
    console.log(str1===str2)
 })("valmikee","valmikee");
 
//Self-Invoking Functions ( Immediately invoked function expression)

//function can be used as values 
function myFunction(a, b) {
    return a * b;
   }
   var x = myFunction(4, 3);
console.log(myFunction(2,5))