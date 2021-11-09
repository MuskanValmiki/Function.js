var factorial= (num) =>{
    var fac = 1;
    while (num>0){
        fac = fac*num
        num--
    }
    console.log("Its a factorial",fac);
}
var readline = require("readline-sync");
var user = readline.questionInt("Enter any num=");
factorial(user);
// factorial number
