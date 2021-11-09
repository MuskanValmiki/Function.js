function check_numbers(num1,num2){
    if (num1%2==0 && num2%2==0){
        return "Both are even"
    }
    else{
        return "Not even"
    }
}
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Enter any num =");
var num2 = readlineSync.questionInt("Enter any num =");
console.log(check_numbers(num1,num2));
// here we are checking even or not even