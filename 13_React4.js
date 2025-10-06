// Prepared by:
// Name: Karan Singh
// RId: R52376

//code 4

// Access the <ul> by its class name
const ulElement = document.getElementsByClassName("header3")[0];
console.log(typeof(ulElement));

// Clear existing <li> content
ulElement.innerHTML = "";

// Add new <li> items
ulElement.innerHTML = `
<li>Switzerland</li>
<li>Poland</li>
<li>Uzbekistan</li>
<li>Russia</li>
`;