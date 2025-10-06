// Prepared by:
// Name: Karan Singh
// RId: R52376

function outer() {
    let outerVar = "I am from outer function";

    function inner() {
        let innerVar = "I am from inner function";
        console.log(outerVar); // inner can access outer's variable
        console.log(innerVar); // inner can access its own variable
    }

    inner();
}

outer();