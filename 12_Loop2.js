// Prepared by:
// Name: Karan Singh
// RId: R52376

// forEach method expects a callback function
let ar1 = [10, 20, 30, 40, 50, 60];
ar1.forEach(function (num) {
    console.log(num);
});

// arrow function in callback function
let arr2 = [1, 2, 3];
arr2.forEach((num) => {
    console.log(num);
});

// arrow function in callback function (shorter version)
let arr1 = [1, 2, 3];
arr1.forEach((num) => console.log(num));

// arrow function in callback function, printing squared values
let arr3 = [1, 2, 3, 4];
arr3.forEach((num) => console.log(num * num));


// for-of loop on array because the array is iterable
// const ar = [10, 20, 30, 40, 50, 60];
// for (let val of ar){ // val is value of array
//     console.log(val);
// }