function perfect(num){
    var sum = 0;
    var check = num;
    for (var i=0; i<num ; i++){
        if (num%i==0){
            sum+=i
        }
    }
    if (check == sum){
        return "Perfect"
    }
    else{
        return "Not a perfect"
    }  
}
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any number =");
console.log(perfect(user));
// perfect num (name fucntion)

var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any number =");
(function perfect(num){
    var sum = 0;
    var check = num;
    for (var i=0; i<num ; i++){
        if (num%i==0){
            sum+=i
        }
    }
    if (check == sum){
        console.log("Perfect")
    }
    else{
        console.log("Not a perfect")
    }  
})(user);
// perfect number in invoke function 