marks_list = [10,46,57,23,80,12,41,14];
function students(marks){
    var count = 0;
    for (var i of marks){
        if (i>20){
            count++
        }
    }
    return count
}
function isGreather(mark){
    for (var i of mark){
        if (i>20){
            return true
        }
    }
}
console.log(isGreather(marks_list));
console.log(students(marks_list));
// students marks