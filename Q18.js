// position sum by using different function
function add_numbers_list (array1,array2){
    var i = 0;
    while (i<array1.length){
        var j = 0;
        while (j<array2.length){
            if (i == j){
                var sum = array1[i]+array2[i] 
                     
            }
            j++
        }
        i++
        console.log(sum);
        console.log("---------------------------");
    }     
}
add_numbers_list( [50, 60, 10] ,[10, 20, 13]);
// sum of position 

var add_num_list = function(array1,array2){
    var i = 0;
    while (i<array1.length){
        var j = 0;
        while (j<array2.length){
            if (i == j){
                var sum = array1[i]+array2[i]      
            }
            j++
        }
        i++
        console.log(sum);
        console.log("---------------------------");
}
}
add_num_list([50, 60, 10] ,[10, 20, 13]);
// anonymous function

(function sum_list(array1,array2){
    var i = 0;
    while (i<array1.length){
        var j = 0;
        while (j<array2.length){
            if (i == j){
                var sum = array1[i]+array2[i]      
            }
            j++
        }
        i++
        console.log(sum);
        console.log("---------------------------");
    }
})([50, 60, 10] ,[10, 20, 13]);
// self invoke function