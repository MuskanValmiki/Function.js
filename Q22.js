var licences_checker= function(speed){
    var reply = "";
    if(speed <70){
        reply = "ok";
    }
    else{
        var i = 70;
        var point = 1;
        while (i<speed){
            if (speed>70){
                reply = point
            }
            if (point > 12){
                reply = "License Suspend";
            }
            i+=5
            point+=1
        }
    }
    return reply
}
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any num =");
console.log(licences_checker(user));
// here according to speed we are getting output