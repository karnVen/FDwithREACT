/* Prepared by:
Name: Karan Singh
RId: R52376 */
//Fibonacci series using Generator
function * fibo(limit){
    let a=0,b=1;
    while(a<=limit){
        yield a;
        [a,b]=[b,a+b];
    }
}
const x=fibo(20);
for(let y of x){
    console.log(y);
}