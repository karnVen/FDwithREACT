// Prepared by:
// Name: Karan Singh
// RId: R52376

const quotes = [
    "The sun rises in the east.","learning never stops.","She loves to read books.","Time waits for no one.","He is pra",
    "Hard work brings success.","The stars shine at night.","Dream big and stay focused.","The laptop is on the table",
    "Happiness is a choice.","The cat is sleeping on the sofa.","Patience is the key to success.","The phone is ringing",
    "Every day is a new beginning.","she is writing her homework.","Nature is full of beauty.","coding improves problem",
    "The dog is barking outside.","Books are windows to knowledge.","Practice makes a man perfect.","The child is playi",
    "Always believe in yourself.","water is essential for life.","He is watching a movie.","A journey of thousand miles",
    "Flowers make the garden beautiful.","Education is the real power.","The baby is smiling happily.","Honesty is the"
];

const hexColors = [
    "#FF5733", "#33FF57", "#B22222", "#3357FF", "#F1C40F", "#9E44AD",
    "#E74C3C", "#2ECC71", "#B22222", "#3498DB", "#9B59B6", "#34495E",
    "#16A085", "#27AE60", "#2980B9", "#D35400", "#C0392B", "#7F8C8D",
    "#FF4500", "#ADFF2F", "#0C143C", "#00FFFF", "#FF69B4", "#40E0D0",

    "#E74C3C", "#2ECC71", "#B22222", "#3498DB", "#9B59B6", "#34495E",
    "#16A085", "#27AE60", "#2980B9", "#D35400", "#C0392B", "#7F8C8D",
    
    "#FF4500", "#ADFF2F", "#0C143C", "#00FFFF", "#FF69B4", "#40E0D0"
];

// Prepared by:
// Name: Karan Singh
// RId: R52376

function generateQuote() {
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[index]; // you can also use innerHTML at place of 'textContent'.
}

setInterval(generateQuote, 2000);

function changeColor() {
    //getElementsByClassName returns an HTMLCollection, so you need to access the first elementusing [0].
    //To change the background color of an element, use .style.backgroundColor.
    const element = document.getElementsByClassName('container')[0];
    const idx = Math.floor(Math.random() * hexColors.length);
    element.style.backgroundColor = hexColors[idx];
}

setInterval(changeColor, 2000);