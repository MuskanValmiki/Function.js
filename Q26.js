function sum_average(num1,num2,num3){
    var sum = num1+num2+num3;
    var avg = sum/3
    console.log("its a sum of num",sum);
    console.log("Its a average ",avg)
}

var readlineSync = require("readline-sync");
var user1 = readlineSync.questionInt("Enter any number =");
var user2 = readlineSync.questionInt("Enter any number =");
var user3 = readlineSync.questionInt("Enter any number =");
sum_average(user1,user2,user3);
// student marks average sum