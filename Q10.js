var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Enter any num =");
(function multiplesOfNumbers(limit){
    var sum = 0;
    for (var i = 0; i<=limit; i++){
        if (i%3==0 || i%5==0){
            sum+=i
        }
    }
    console.log(sum);
})(num1);
// limit multiply