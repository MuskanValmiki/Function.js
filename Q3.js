function eligible_for_vote(age){
    if (age>18){
        return "You are eligible for vote"
    }
    else{
        return "not eligible"
    }

}
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Enter your age =");
console.log(eligible_for_vote(num1));
// eligible for vote