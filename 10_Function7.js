// Prepared by:
// Name: Karan Singh
// RId: R52376
// Passing function as an argument is called a callback function.

// Example 1: Normal function as argument
function fun1(fun2){
    console.log("hi am karn");
    fun2();
}
function fun2(){
    console.log("hi am kush");
}
fun1(fun2);

// Example 2: Passing function directly inside call
function fun3(fun4){
    console.log("i am mi");
    fun4();
}
fun3(function fun4(){ // function passed directly as argument
    console.log("i am now");
});

// Example 3: Using function reference (stored in variable)
function fun5(fun6){
    console.log("in busu");
    fun6();
}
const refvariable = function fun6(){
    console.log("i am fun 6");
}
fun5(refvariable);

// Example 4: A: Using arrow function directly as callback
function fun7(fun8){
    console.log("hi am karn");
    fun8();
}
fun7(() => { // arrow function directly passed
    console.log("hi am kush");
});