function perfect(num){
    sum=0
    for(var i=1;i<num;i++){
        if(num%i === 0){
            sum+=i
        }
    }
    if(sum === num){
        console.log(num," is a perfect number");
    }
    else{
        console.log(num," is not a perfect number");
    }
}
perfect(6);
//find the perfect number
 
function average(num1,num2,num3){
    console.log("sum of three numbers -",num1+num2+num3);
    console.log("sum of three numbers -",(num1+num2+num3)/3);
}
const input = require('readline-sync');
let number1 = input.questionInt('Enter the number1 :- ');
let number2 = input.questionInt('Enter the number2 :- ');
let number3 = input.questionInt('Enter the number3 :- ');
average(number1,number2,number3);
//find the average
  
function showNumbers(limit){
    for(i=0;i<=limit;i++){
        if(i%2 ===0){
            console.log(i," - Even");
        }
        else{
            console.log(i," - Odd");
        }
    }
}
showNumbers(3);
//find the even or odd  