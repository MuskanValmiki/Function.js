function fun1(){
    console.log("I am Navgurukul");
}
function fun2(callback){
    console.log("I am Nav");
    callback();
}
fun2(fun1);
//callback

var calc= function (num1,num2,calcType){ 
    if (calcType=="add"){
        return num1+num2;
    }
    else if(calcType =="multiply"){
        return num1*num2;
    }
}
console.log(calc(2,3,"add"));
//callback

var  add = function(num1,num2){
    return num1+num2;
}
var multiply= function(num1,num2){
    return num1*num2;
}  
var calc= function (num1,num2,callback){
    console.log(callback(num1,num2));
}  
calc(2,3,add);
calc(2,3,multiply);
//callback   
 
const addOne = (n) => n + 1
console.log(addOne(1)) 
console.log(addOne(2)) 
console.log(addOne(3))
console.log(addOne(4)) 
//it is work like syncronous because it will wait for each condition when first condition complate then it will go throw the next condition

const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const getMoreThanTen = num => num > 10
// Passing getLessThanFive function into filter
const lesserThanFive = numbers.filter(getLessThanFive)
console.log(lesserThanFive)
// Passing getMoreThanTen function into filter
const moreThanTen = numbers.filter(getMoreThanTen)
console.log(moreThanTen)