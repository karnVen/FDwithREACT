// Prepared by:
// Name: Karan Singh
// RId: R52376

//another way to create an object in JS
function Fruits(taste, color){
    this.taste = taste;
    this.color = color;
}

let mango = new Fruits("very sweet","yellow");
let grapes = new Fruits("sweet and sour","green");

console.log(mango.taste);
console.log("\n");

console.log(grapes.color);
console.log("\n");

//another way around
Fruits.apple = new Fruits("very sweet", "red");
console.log(Fruits.apple.taste);
console.log("\n");