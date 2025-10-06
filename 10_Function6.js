// Prepared by:
// Name: Karan Singh
// RId: R52376
function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    console.log(ans);
    return ans;
}

function findSumTill100(){
    return findSum(100);
}

setTimeout(findSumTill100, 1000)
console.log("hello world");