/* Prepared by:
Name: Karan Singh
RId: R52376 */
//Generator 1st
function * gen(strat,end){
    yield 1;
    yield 2;
    yield 3;
    yield null;
    yield 4;
}
const x=gen();
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);
console.log(x.next().value);