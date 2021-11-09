function fun1() {
    function fun2(a) {
        return a+5;
    }
    return fun2(5);
}
console.log(fun1());
// nested function