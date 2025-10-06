// Prepared by:
// Name: Karan Singh
// RId: R52376

function fun1(){
    let a1=5;
    if(a1 == 5){
        let f1=70; // block scope.
        console.log("inside",f1);
    }
    console.log("outside",f1);
}
fun1();
console.log("global",f1);


// function fun2(){
//     let a2=5;
//     if(a2 == 5){
//         var f2=70; // function scope.
//         console.log("inside",f2);
//     }
//     console.log("outside",f2);
// }
// fun2();
// console.log("global",f2);


// function fun3(){
//     let a3 =5;
//     if(a3 == 5){
//         f3=70; // global scope.