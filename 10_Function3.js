// Prepared by:
// Name: Karan Singh
// RId: R52376

// This function takes two numbers and a callback function
function sum(num1, num2, callback) {
    let result = num1 + num2;
    // It then calls the callback function with the result
    callback(result);
}

// This is the callback function that will be executed
function displayResult(data) {
    console.log("The result of the sum is: " + data);
}

// Here, we call 'sum' and pass 'displayResult' as the callback
sum(1, 2, displayResult);