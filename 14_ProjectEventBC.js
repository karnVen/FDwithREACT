// Prepared by:
// Name: Karan Singh
// RId: R52376

const grantparent=document.getElementById("grantparent");
const parent=document.getElementById("parent");
const child=document.getElementById("child");

child.addEventListener("click",(event) => {
    console.log("hello child");
    console.log(event.target);
},true);

parent.addEventListener("click",(event) => {
    console.log("hello parent");
    console.log(event.target);
},false); // by default (false) = bubbling hogi.

grantparent.addEventListener("click",(event) => {
    console.log("hello grantparent");
    console.log(event.target);
},false);