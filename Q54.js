//normal function-
function myCampusName(campus){
    console.log(`My campus is ${campus}`);
    console.log("muskan")
}
myCampusName("Sarjapura")
  
//arrow function-
const myCampus = (campus) =>{
    console.log(`My campus is ${campus}`);
}
myCampus("Sarjapur")

const myName = name => console.log(`My name is ${name}`);
myName("Muskan Valmikee");

 
// callback function-
const callbackWaalaFunction = (fn) => {
    return fn("muskan", 18, "chocolates")
}
const callback = (arg1, arg2, arg3) => {
    return "My name is "+arg1+" and I am "+arg2+"years old"+". I like "+arg3
}
const result = callbackWaalaFunction(callback)
console.log(result) 
 

// another example callback function-
function task1(){
    console.log("task1");
}
function task2(){
    console.log("task2");
}
setTimeout(task1,2000);
task2();

