function switchOfStuff(val) {
    var answer = "";
    switch(val){
      case 'a':
      answer+='apple';
      break
      case 'b':
      answer+='bird';
      break
      case 'c':
      answer+='cat';
      break
      case 'd':
      answer+='stuff';
      break
      default:
      answer+='stuff';
      break
    }
    return answer;
}
switchOfStuff('a');
switchOfStuff('b');
switchOfStuff('c');
switchOfStuff('d');
switchOfStuff(4);