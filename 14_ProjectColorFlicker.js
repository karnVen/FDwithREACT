// Prepared by:
// Name: Karan Singh
// RId: R52376

// Get access to every color button individually
let redColor = document.getElementById('red');
let blueColor = document.getElementById('blue');
let pinkColor = document.getElementById('pink');
let greenColor = document.getElementById('green');
let orangeColor = document.getElementById('orange');

// Get access to the body
let body = document.body;

// Add a separate event listener to each color button
redColor.addEventListener('click', () => {
    body.style.background = 'red';
});
blueColor.addEventListener('click', () => {
    body.style.background = 'blue';
});
pinkColor.addEventListener('click', () => {
    body.style.background = 'pink';
});
greenColor.addEventListener('click', () => {
    body.style.background = 'green';
});
orangeColor.addEventListener('click', () => {
    body.style.background = 'orange';
});