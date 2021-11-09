var harshad = (num_) => {
    var i = num_;
    while (num_>0){
        var sum = 0;
        var rem = num%10;
        sum += rem
        num_ = Math.floor(num_/10)
    }
if (i%sum == 0){
    return "Harshad"
}
else{
    return "Not a Harshad"
}
}
var user = require("readline-sync");
var num = user.questionInt("enter any num=");
console.log(harshad(num));
// harshad number