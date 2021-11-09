const getRollNo=()=>{
    setTimeout(()=>{
        console.log("Api getting roll ");
        let roll_no=[1,2,3,4,5];
        console.log(roll_no);
        setTimeout(()=>{
        },2000,)
    },2000);
}
getRollNo();
// callback hell

var talk=function (fx){
    fx();
}
var sayhii=function(){
    console.log("hii");
}
talk(sayhii);
// callback function 