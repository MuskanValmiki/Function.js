function even_list(list1,list2){
    var i = 0;
    while (i<list1.length){
        var j = 0;
        while (j<list2.length){
            if (i == j){
                if (list1[i]%2==0 && list2[i]%2==0){
                    console.log("Both are even");
                    console.log("---------------------------");
                }
                else{
                    console.log("Both are not even");
                    console.log("---------------------------");
                }       
            }
            j++
        }
        i++
    }
}
even_list( [2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87] );
// here we are checking same index element even or not ever 