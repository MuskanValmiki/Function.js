function fun_print_line(user,user1){
    console.log(user,"\n"+user1)
}
var readlineSync = require("readline-sync")
var str = readlineSync.question("Enter anything:=");
var str1 = readlineSync.question("Enter anything:=");
fun_print_line(str,str1);
// take input and print