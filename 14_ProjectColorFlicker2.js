// Prepared by:
// Name: Karan Singh
// RId: R52376

// Get access to all the color buttons at once
const allButtons = document.querySelectorAll('button');
const body = document.body;

// --- Way 1: Using the button's ID ---
// Access each button using a forEach loop
allButtons.forEach((eachButton) => {
    // Apply an event listener to each button
    eachButton.addEventListener('click', () => {
        // Set the background color using the button's ID
        body.style.backgroundColor = eachButton.id;
    });
});

/*
// --- Way 2: Using the event.target property (alternative) ---
allButtons.forEach((eachButton) => {
    eachButton.addEventListener('click', (event) => {
        // The event.target is the specific button that was clicked
        body.style.backgroundColor = event.target.id;
    });
});
*/