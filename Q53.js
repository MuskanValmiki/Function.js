function sayBye(username){
    return "sayBye "+username;
}
console.log(sayBye("Muskan valmikee"));
//here we have to take user input and print sayBye this name

function getFullName(firstName,lastName){
    console.log(firstName+" "+lastName)
   }
    
getFullName("Muskan","Valmikee");
//here we have to make function and print first name and last name if we wrote small g and print capital G so it is showing referrence error


function average(science,math){
    return (science+math)/2
}
console.log(average(67,89));
//find the average of both number

function insertingElement(arr){
    var a=5;
    arr.push(a);
    return arr;
    console.log(arr);
  
 }
 console.log(insertingElement([1,2,3,4]));
//add any element in array