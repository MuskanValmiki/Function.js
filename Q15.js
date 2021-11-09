function fun1(a){
    var sum = a+50
    return sum
}
res = fun1(3);

function fun2(b){
    var res = res-b
    console.log(res)
}
fun2(10)

function fun1(){
    var a=5;
    var b=10;
    return c=a+b
}
console.log(fun1());
// call one function to another 

function fun2(){
    var x=5;
    var y=3;
    return x+fun1()

}
console.log(fun2());