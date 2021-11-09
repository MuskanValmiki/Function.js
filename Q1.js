var user = require("readline-sync");
var num = user.questionInt("enter any num=");

(function armstonrg(number){
    var i = number;
    var sum = 0;
    while (i>0){
        var rem = i%10;
        sum += rem**3;
        i = Math.floor(i/10);
    }
if(number == sum){
    console.log("Armstrong Number");
}
else{
    console.log("Not a Armstrong Number");
}
})(num)
// armstrong num