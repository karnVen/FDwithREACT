// Prepared by:
// Name: Karan Singh
// RId: R52376

const num=[5,12,15,178,30];
const found=num.find((element) => element>10); // ye ek value ko print krayega staring me joo 10 se bdi hai
console.log(found);

const numarr=[5,12,15,178,30];
const found2=numarr.filter((num) => num >10); // ye all value ko print krayega staring me joo 10 se bdi hai
console.log(found2);

//remove element from the front side of an array
const arry=[-776,-5.5,"apple","mango",3.409];
console.log(arry.shift());
console.log(arry);

//add element from the front side of an array
const ary=[-776,-5.5,"apple","mango",3.409];
console.log(ary.unshift("karn"));
console.log(ary);

// for one match
const numberArray = [5, 12, 8, 130, 44];
// CORRECTED: Renamed 'found' to avoid re-declaration error
const foundAgain = numberArray.find((element) => element > 10);
console.log("output of find() function: ", foundAgain);

// for all match
const numArray = [5, 12, 8, 130, 44];
const result = numArray.filter((num) => num > 10);
console.log("output of filter function: ", result);