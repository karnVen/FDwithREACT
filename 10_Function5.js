// Prepared by:
// Name: Karan Singh
// RId: R52376
function sumOfSomething(a,b,fn){
    const v1=fn(a);
    const v2=fn(b);
    return v1+v2;
}
console.log(sumOfSomething(2,3,function(k){
    return k*k;
}));
function sum(n1,n2,n3,n4,displayResult){
    let rs=n1+n2+n3+n4;
    displayResult(rs);
}
function output(data){
    console.log(data);
}
let res=sum(1,2,3,4,output);