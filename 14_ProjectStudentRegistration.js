// Prepared by:
// Name: Karan Singh
// RId: R52376

const form = document.querySelector('form');
//accessing the input fields one by one:
form.addEventListener('submit',(event) => {
    //the default behaviour of the webpage is, that when we send the details via a form to
    //the backend, the browser automatically refreshes the whole webpage come back to its
    //original form.
    event.preventDefault();
    //this prohibits the webpage to refresh automatically by its own.

    const First = document.getElementById('first');
    console.log(First.value);

    const Second = document.getElementById('second');
    console.log(Second.value);

    const Third = document.getElementById('third');
    console.log(Third.value);

    const Result = document.getElementById('result');
    Result.innerText = `${First.value} ${Second.value} is a good boy`;
})