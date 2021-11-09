function isLess(a, b) {
    return a<b;
} 
console.log(isLess(10, 15));
console.log(isLess(15,10));


function abTest(a, b) {
    if ((a>=0) && (b>=0)){
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
  }
console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(2,-2));
console.log(abTest(2,8));
console.log(abTest(3,3));
console.log(abTest(0,0));
// here we are checking greater and less than
