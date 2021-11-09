var show_num = function(limit){
    for (var i=0; i<=limit; i++){
        if (i%2==0){
            console.log("Its even",i);
        }
        else{
            console.log("Its odd",i)
        }
    }
}
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Enter any num =");
show_num(num1)
// limit odd even