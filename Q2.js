// all question in arrow function-

var sum = (num,num1) => {
    return num+num1
}
console.log(sum(2,4));
// sum

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
// perfect num



var harshad = (num_) => {
    var i = num_;
    while (num_>0){
        var sum = 0;
        var rem = num%10;
        sum += rem
        num_ /= 10
    }
if (i%sum == 0){
    return "Harshad"
}
else{
    return "Not a Harshad"
}
}
console.log(harshad(num));
// harshad num


var user = require("readline-sync");
var n = user.questionInt("enter any num=");
var x = 0;
var y = 1 ;
var z
while (y<n){
    console.log(y)
    z = x + y
    x=y
    y= z
    
    
}
// fibannaci series

var factorial= (num) =>{
    var fac = 1;
    while (num>0){
        fac = fac*num
        num--
    }
    console.log("Its a factorial",fac);
}
var readline = require("readline-sync");
var user = readline.questionInt("Enter any num=")
factorial(user);
// factorial num