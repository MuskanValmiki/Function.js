var numbers = [1, 2, 6, 8, 12, 14];
// Normal Way
var result = numbers.filter(function(element) {
  if (element>5){
      return element
  };
})
console.log(result);//[6,8,12,14]
//in normal array by using filter

var a= numbers.filter(element => element>5)
console.log(result);//[6,8,12,14]
//arrow fat function we use filter

var number = [2, 4, 6, 8, 12, 14];
 
// Normal Way
var sum = number.reduce(function(total, element){
   return total + element;
})
console.log(sum);//46
// here we use reduce method in normal function

// es6 way
var sum = number.reduce((total, value) => total + value)
console.log(sum);//46
//here we use reduce method in arrow function 

var numbers= [-0.20,-10, 0.2, -40,1, -25];
// method (return element > 0).
var found = numbers.find(function (element) {
   return element > 0;
});
console.log(found);//0.2
//here we use find methods in normal function 

// Es6 way
var found = numbers.find((element) =>
   element > 0);
console.log(found);//0.2
//here we use find methods in arrow function