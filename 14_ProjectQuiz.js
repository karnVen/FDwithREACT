// Prepared by:
// Name: Karan Singh
// RId: R52376

// Drawbacks of Using an Array for correct answers: You're using an array to store the correct answers, which works for an
// ordered quiz-but there are a few subtle drawbacks to be aware of, especially as your project scales or becomes more dynamic.
// Order Dependency-
// - Your comparison logic assumes that user answers (AnswerValues) are in the exact same order as correctAnswers.
// - If the form fields are rearranged or submitted out of order, the matching breaks-even if the answers are correct.
const correctAnswers = [
    "Pink City", "Maharaja Sawai Jai Singh II", "Jantar Mantar", "Hawa Mahal", "Golden Triangle"
];

const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault(); //prevent the webpage to refresh automatically
    const formData = new FormData(form); //the formData object collects all the form data
    const questionValues = Array.from(formData.keys());//this gives the keys
    console.log(questionValues);
    const AnswerValues = Array.from(formData.values()); //this gives the values
    console.log(AnswerValues);
    let result = 0;
    for(let i = 0; i < AnswerValues.length; i++){
        if(AnswerValues[i] === correctAnswers[i]){
            result++;
        }
    }
    const output = document.getElementById('resultOutput');
    output.innerHTML = `${result} out of 5 is correct!`
});