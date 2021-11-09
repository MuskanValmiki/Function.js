function checkEqual(a, b) {
    return a!=b ? "Not Equal":"Equal";
  }
console.log(checkEqual(1, 2));
console.log(checkEqual(1, 1));
console.log(checkEqual(1, -1));
//here we are checking is is equal or not ny using ternary operators.

function checkSign(num) {
    return (num>0)? "positive":(num<0)? "negative":"zero";
  }
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
//here we use ternary operators in multiple condition and we check num is positive,negative and zero.