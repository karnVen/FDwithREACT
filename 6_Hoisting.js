// Prepared by:
// Name: Karan Singh
// RId: R52376

// Activity: Hoisting in JavaScript
console.log(a); // undefined (variable is hoisted, but not initialized)
var a = 10;
console.log(a); // 10

// Example with function
hoistFunction(); // Works because function declarations are hoisted

function hoistFunction() {
  console.log("This function is hoisted!");
}

// Example with let/const
// console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20