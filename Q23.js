var square_of_num = function(number){
    var dict ={};
    for (var i=1; i<=number; i++){
        var num_square = i*i;
        dict[i]=num_square
    }
    return dict
}
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Enter any num =");
console.log(square_of_num(num1));
// square add in object