// Prepared by:
// Name: Karan Singh
// RId: R52376

// Anonymous function assigned to a variable
let greet = function(name) {
    return "Hello " + name + "!";
};

console.log(greet("karnVen")); // Output: Hello karnVen!

// Anonymous function used directly
setTimeout(function() {
    console.log("This is an anonymous function inside setTimeout!");
}, 1000);