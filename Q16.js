var perfect = (number) => {
    var sum = 0;
    for (var i =1; i<number; i++){
        if (number%i==0){
            sum+=i
        }
    }
    if (number == sum){
        return "Perfect Num"
    }
    else{
        return "Not Perfect Num"
    }  
}
var user = require("readline-sync");
var num = user.questionInt("enter any num=");
console.log(perfect(num));
// perfect number in arrow function
