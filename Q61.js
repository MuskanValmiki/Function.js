function isGreaterthan20(array){
    var count=0;
    var index=0;
    while (index<array.length){
        if ((array[index])>20){
            count++;
        }
        index++;
    }
    return (count);
}
console.log(isGreaterthan20([21,25,19,25,33,54]));
// find the greater 20 number

function chainToSwitch(val) {
    var answer = "";
    switch(val){
      case  ("bob"):
        answer = "Marley";
        break;
      case (42):
        answer = "The Answer";
        break;
      case (1):
        answer = "There is no #1";
        break;
      case (99):
        answer = "Missed me by this much!";
        break;
      case (7):
        answer = "Ate Nine";
      case ("John"):
        answer=""
      case (val==156):
        answer=""
    return answer;
    };
  }
console.log(chainToSwitch('bob'));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch('John'));
console.log(chainToSwitch(156));
  