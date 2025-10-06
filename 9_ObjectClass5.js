// Prepared by:
// Name: Karan Singh
// RId: R52376

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