// Prepared by:
// Name: Karan Singh
// RId: R52376
function fun3(){
    let a3 =5;
    if(a3 == 5){
        f3=70; // global  scope.
        console.log("inside",f3);
    }
    console.log("outside",f3);
}
fun3();
console.log("global",f3);
