// Prepared by:
// Name: Karan Singh
// RID: R52376

// Activity: Oparators in JavaScript
let a  = 10 , b = 3;
console.log("Arithmatic Operators:");
console.log("a+b=", a+b); 
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);
console.log("a**b=", a**b);// exponentiation

//2. assigment operators

let x = 5 ; 
console.log("\n Assignment Operators:");
x +=2; // x = x+2
console.log("x += 2 ->", x);
x -=1; // x = x-1
console.log("x -= 1 ->", x);
x *=3; // x = x*3
console.log("x *=3 ->", x);
x /=2; // x = x / 2
console.log("x /= 2->", x);


// Prepared by:
// Name: Karan Singh
// RID: R52376
//3. comparison operators
let p = 10 , q = "10";
console.log("\n comparison Operator:");
console.log("p == q ->", p==q);//true
console.log("p === q ->", p===q);// fals(different type)
console.log("p != q ->", p!=q);//false
console.log("p !== q ->", p!==q);//true 
console.log("p > 5 ->", p>5);
console.log("p < 5 -> , p<5");

// 4. logical Operators
let cond1 = true, cond2 = false;
console.log ("\n logical operators "); 
console.log ("cond1 && cond2 -> ", cond1 && cond2 );//And
console.log ("cond1 || cond2 -> ", cond1 || cond2 );//OR 
console.log ("!cond1 -> ", !cond1 );

//5 Bitwise  operators

let m = 5, n = 3 ; 
console.log( "\n bitwise operators")
console.log("m & n =", m & n); // AND
console.log("m | n =", m | n); //OR
console.log("m ^ n =", m ^ n); //XOR
console.log("~M =", ~m); // NOT
console.log("m << 1 =", m << 1);// LEFT SHIFT
console.log("m >> 1 =", m >> 1);// RIGHT SHIFT

//6. TERNARY OPERATOR
let age = 18 ;
console.log ("\n Ternary Operator: "); 
let result = (age >=18)? "elifible to vote":"note eligible";
console.log(result);

// 7. typeof operator
console.log("\n typeof operator:");
console.log(typeof 1223); // number 
console.log(typeof "hi"); // string 
console.log(typeof true ); // boolean 
console.log(typeof undefined); // undefined
console.log(typeof null); // object (special case) 



