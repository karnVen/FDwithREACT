// Prepared by:
// Name: Karan Singh
// RId: R52376

// Get HTML elements
var mouseXElement = document.getElementById('mouseX');
var mouseYElement = document.getElementById('mouseY');
var follower = document.getElementById('follower');
var colorBox = document.getElementById('colorBox');

// Colors array for the color box
var colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink'];
var currentColorIndex = 0;

// mouse move event - this is the main feature
document.addEventListener('mousemove', function(event) {
    // get mouse position
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Update the text showing mouse position
    mouseXElement.textContent = mouseX;
    mouseYElement.textContent = mouseY;

    // Move the red circle to follow mouse
    follower.style.left = mouseX + 'px';
    follower.style.top = mouseY + 'px';

    // Change color of the box based on mouse position
    var colorIndex = Math.floor(mouseX / 100) % colors.length;
    colorBox.style.backgroundColor = colors[colorIndex];
});

// Click event to change color of the box
colorBox.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[currentColorIndex];
});

// Mouse enter event for the color box
colorBox.addEventListener('mouseenter', function() {
    colorBox.style.transform = 'scale(1.1)'; // larger direct 10%
    colorBox.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
});

// Mouse leave event for the color box
colorBox.addEventListener('mouseleave', function() {
    colorBox.style.transform = 'scale(1)'; // starting me size small hi rakhni hai na ki
    colorBox.style.boxShadow = 'none';
});