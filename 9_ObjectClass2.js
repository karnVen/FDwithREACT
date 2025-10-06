// Prepared by:
// Name: Karan Singh
// RId: R52376
let boyObject = {
    height: 170,
    weight: 69,
    favouriteColor: "green",
    favouriteSnacks: ["garlic bread", "pizza", "sandwich's"],
    familyMembers: ["mother", "father", "2 siblings", "grandfather", "grandmother"],
    boyFunc: function() {
        console.log("I'm Funky.");
        return "Cranky Boy."
    }
}

console.log("\n");
console.log(boyObject);
console.log(typeof(boyObject));
console.log("\n");
console.log(boyObject.height);
console.log("\n");
console.log(boyObject.familyMembers);
console.log("\n");

let res = console.log(boyObject.boyFunc());
console.log("\n");
for(let i=0; i<boyObject.favouriteSnacks.length; i++){
    console.log(boyObject.favouriteSnacks[i])
}


console.log("\n");
//for each loop to get only value:
boyObject.familyMembers.forEach(function(val){
    console.log(val);
})
console.log("\n");

//for each loop to get value along with the index:
boyObject.familyMembers.forEach(function(value,index){
    console.log(value,index);
})
console.log("\n");

/*
//another way to create an object in JS
function Fruits(taste, color){
    this.taste = taste;
    this.color = color;
}

let mango = new Fruits("very sweet","yellow");
let mango = new Fruits("sweet and sour" // <-- this line is cut off in the image
*/