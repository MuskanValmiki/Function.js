function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
console.log(countdown(10));
//it retrun one array without for,while,find,mao,reduce,forEach and other thing we just use if else condition.it is recursion function.
//[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
console.log(rangeOfNumbers(1,10));
//here we run multiple recursion and we put starting and ending point.
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]