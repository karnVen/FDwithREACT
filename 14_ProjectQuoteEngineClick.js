// Prepared by:
// Name: Karan Singh
// RId: R52376

const questions = [
    "The sun rises in the east.","learning never stops.","She loves to read books.","Time waits for no one.",
    "He is practicing coding daily.","Life is full of surprises.","Hard work brings success.","The stars shine at night",
    "Dream big and stay focused.","The laptop is on the table.","Happiness is a choice.","The cat is sleeping on the s",
    "Patience is the key to success.","The phone is ringing loudly.","Every day is a new beginning.","She is writing he",
    "Nature is full of beauty.","Coding improves problem-solving skills.","The dog is barking outside.","Books are wind",
    "Practice makes a man perfect.","The child is playing with toys.","Always believe in yourself.","Water is essential",
    "He is watching a movie.","A journey of thousand miles begins with one step.","Flowers make the garden beautiful."
];

const hexColors = [
    "#FF5733", "#33FF57", "#B22222", "#3357FF", "#F1C40F", "#9E44AD", "#E74C3C", "#2ECC71", "#B222",
    "#3498DB", "#9B59B6", "#34495E", "#E67E22", "#F1A93", "#00FFFF", "#FFD700", "#FF4500", "#ADFF2F", "#0C143C",
    "#FFC3A0", "#FF5733", "#B33FF57", "#67E222", "#FF1493", "#9B59B6", "#E74C3C", "#2980B9", "#8222",
    "#3498DB", "#9B59B6", "#34495E", "#34495E", "#16A085", "#27AE60", "#F1C40F", "#E74C3C", "#2ECC71", "#B222",
    "#FFD700", "#FF1493", "#00FFFF", "#ADFF2F", "#0C143C", "#FF69B4", "#40E0D0"
];

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random() * questions.length);
    text.textContent = questions[index];
    const element = document.getElementsByClassName('container')[0];
    const idx = Math.floor(Math.random() * hexColors.length);
    element.style.backgroundColor = hexColors[idx];
});