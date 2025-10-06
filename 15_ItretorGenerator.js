/* Prepared by:
Name: Karan Singh
RId: R52376 */

// itretor 1
function itretor(start,end){
    let current=start;
    return{
        next(){
            if(current <= end){
                return{
                    value:current++,
                    done:false
                }
            }else{
                return{
                    value:undefined,
                    done:true
                };
            }
        }
    };
}

const itretar=itretor(1,3);
console.log(itretar.next());
console.log(itretar.next());
console.log(itretar.next());
console.log(itretar.next());