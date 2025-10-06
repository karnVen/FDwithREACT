// Prepared by:
// Name: Karan Singh
// RId: R52376

// Asynchronous function using async/await
async function fetchData() {
    console.log("Fetching data...");

    // simulate delay with Promise
    let data = new Promise((resolve) => {
        setTimeout(() => resolve("Data received!"), 2000);
    });

    let result = await data; // waits for promise to resolve
    console.log(result);
}

fetchData();

console.log("This line runs before data is received.");