var readlineSync = require("readline-sync");
var user1 = readlineSync.question("Enter any word =");
var user2 = readlineSync.question("Enter any word =");
(function str_length(str1,str2){
    var ans = "";
    if (str1.length > str2.length){
        ans = str1
    }
    else if (str2.length > str1.length){
        ans = str2
    }
    else{
        ans = "Equal"
    }
    console.log(ans)

})(user1,user2);
// maximum length