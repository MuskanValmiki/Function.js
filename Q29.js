const myMarks= [1,4,6,8,10];
//by forEach method and arraow function inside it
myMarks.map((e) => console.log(e*2));
//by using map method

const myFriends= ["Somi","Samriddhi","Ruchi","Sudha"];
var result= myFriends.forEach((f) => f)
console.log(result);
// returning value 

let numbers = [1, 2, 3, 4];
var result=numbers.map((val, index) => val * val);
console.log(result);//[1,4,9,16]
console.log(numbers);//[1,2,3,4]
//mutability,map will return a new list with the manipulated values ,but forEach returns nothing .both won't change the original array.

let number = [1, 2, 3, 4];
var result=number.map((val, index) => number[index] =val * val);
console.log(result);//[1,4,9,16]
console.log(number);//[1,4,9,16]
//mutabillity

const myArray = [1, 2, 3, 4, 5]
let result =myArray.map(x => x * x).reduce((total, value) => total + value)
console.log(result);//55
//Ability to chain other methods

var numbers = [1, 2, 6, 8, 12, 14];
// Normal Way
var result = numbers.filter(function(element) {
  if (element>5){
      return element
  };
})
console.log(result);