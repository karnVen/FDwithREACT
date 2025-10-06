// Prepared by:
// Name: Karan Singh
// RId: R52376

// for-of loop on array because the array is iterable
const ar = [10, 20, 30, 40, 50, 60];
for (let val of ar){ // val is value of array
    console.log(val);
}

// for-of loop on string because the string is iterable
let str = "good morning";
for (let term of str){
    console.log(term);
}

// for-of loop cannot be directly used on objects,
// so we iterate over Object.keys(obj)
const obj = {
    Name: "karn",
    age: 40
};
for (let x of Object.keys(obj)){
    console.log(x, obj[x]);
}

// forEach method expects a callback function
// let ar1 = [10, 20, 30, 40, 50, 60];
// ar1.forEach(function (num){
//     console.log(num);
// });