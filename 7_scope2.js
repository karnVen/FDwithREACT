// Prepared by:
// Name: Karan Singh
// RId: R52376

function fun2(){
    let a2=5;
    if(a2 == 5){
        var f2=70; // function scope.
        console.log("inside",f2);
    }
    console.log("outside",f2);
}
fun2();
console.log("global",f2);
