// Prepared by:
// Name:karan singh
// RId: R52376
// Activity: Operator Precedence in JavaScript
let a = 10, b = 5, c = 2;
console.log("Operator Precedence Examples:");

// Example 1: Multiplication has higher precedence than addition
let result1 = a + b * c;
// Here: b * c = 5 * 2 = 10 -> a + 10 = 20
console.log("a + b * c = ", result1);

// Example 2: Parentheses change the precedence
let result2 = (a + b) * c;
// Here: (a + b) = 15 -> 15 * 2 = 30
console.log("(a + b) * c = ", result2);

// Example 3: Division and multiplication (same precedence, evaluated left to right)
let result3 = a / b * c;
// Here: (10 / 5) = 2 -> 2 * 2 = 4
console.log("a / b * c = ", result3);

// Example 4: Exponentiation has higher precedence than multiplication
let result4 = a * b ** c;
// Here: b ** c = 5**2 = 25 -> a * 25 = 250
console.log("a * b ** c = ", result4);

// Example 5: Assignment has lower precedence, so arithmetic executes first
let x = 5;
x = 10 * 2 + x;
// 10 * 2 = 20 -> 20 + 5 = 25
console.log("x = ", x);