// Prepared by:
// Name: Karan Singh
// RId: R52376

//another way to create a class and object in JS

//1. using class declaration method
//using class keyword
class fruit{
    constructor(taste, color){
        this.taste = taste;
        this.color = color
    }
};

//creating an object of the fruit class
let kiwi = new fruit("sweet","green");
console.log(typeof(fruit));
console.log("\n");

console.log(typeof(kiwi));
console.log("\n");

console.log(kiwi);
console.log("\n");

console.log(kiwi.color);
console.log("\n");


//2. using class expression method
let fruit2 = class{
    constructor(color, taste){
        this.color = color;
        this.taste = taste;
    }
};

let Orange = new fruit2("orange", "sweet");

console.log(typeof(fruit2));
console.log("\n");

console.log(typeof(Orange));
console.log("\n");

console.log(Orange);
console.log("\n");

console.log(Orange.color);
console.log("\n");