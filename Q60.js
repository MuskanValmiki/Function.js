const myMarks= [1,4,6,8,10]
//traditional way
for(var i=0;i<myMarks.length;i++){
   console.log(myMarks[i])
}
console.log('-------------------------');
 
//by forEach method and arrow function inside it
myMarks.forEach((e) => console.log(e))
  
//by forEach method and normal function inside it
myMarks.forEach(function(e){
   console.log(e)
});
 
// for Each example

const myFriends= ["Shweta","komal","jyoti","chauhan"]
var result= myFriends.forEach((e) => e)
console.log(result);//undefined
// Returning value

let numbers = [1, 2, 3, 4];
var result=numbers.forEach((val, index) => val * val);
console.log(result);//undefined
console.log(numbers);//[1,2,3,4]
// mutability 
 
let numbers = [1, 2, 3, 4];
var result=numbers.forEach((val, index) => console.log(val * val));
console.log(result);
console.log(numbers);
//mutability 