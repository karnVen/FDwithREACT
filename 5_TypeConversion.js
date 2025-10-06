// Prepared by:
// Name: Karan Singh
// RId: R52376

// Activity: Type Conversion in JavaScript

// 1. Number to String
let num = 123;
let strNum = String(num);
console.log("Number to String:", strNum, "=>", typeof(strNum));

// 2. String to Number
let str = "456";
let numStr = Number(str);
console.log("String to Number:", numStr, "=>", typeof(numStr));

// 3. Boolean to String
let bool = true;
let strBool = String(bool);
console.log("Boolean to String:", strBool, "=>", typeof(strBool));

// 4. String to Boolean
let str2 = ""; // empty string is false
let boolStr = Boolean(str2);
console.log("String to Boolean:", boolStr, "=>", typeof(boolStr));

// 5. Number to Boolean
let num2 = 0; // 0 is false
let boolNum = Boolean(num2);
console.log("Number to Boolean:", boolNum, "=>", typeof(boolNum));

// 6. Boolean to Number
let bool2 = true; // true is 1
let numBool = Number(bool2);
console.log("Boolean to Number:", numBool, "=>", typeof(numBool));