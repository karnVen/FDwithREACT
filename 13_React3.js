// Prepared by:
// Name: Karan Singh
// RId: R52376

//code 3

//Grab the <ul> using its class name
const ulElement = document.getElementsByClassName("header3")[0];
console.log(ulElement);

// Get all <li> children inside it
const listItems = ulElement.getElementsByTagName("li");
console.log(listItems);
// Rename each <li>
listItems[0].textContent = "Apple";
listItems[1].textContent = "Mango";