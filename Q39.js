function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }
obj={1:"one",2:"two",3:"three"}
console.log(obj,1) 