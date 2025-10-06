// Prepared by:
// Name: Karan Singh
// RId: 53953
function placeOrder(){
    console.log("Placing the order");
    setTimeout(()=>{
        console.log("Your order is placed.");
        pizzaPreparation();
    }, 2000);
}

function pizzaPreparation(){
    console.log("Pizza preparation started");
    setTimeout(()=>{
        console.log("Pizza preparation done");
        pickupOrder();
    }, 3000);
}

function pickupOrder(){
    console.log("Delivery boy reached restaurant.");
    setTimeout(()=>{
        console.log("Order picked up by delivery boy");
        deliverOrder();
    }, 5000);
}

function deliverOrder(){
    console.log("Delivery boy is on the way");
    setTimeout(()=>{
        console.log("Order delivered successfully");
        console.log("Plz give your feedback");
    }, 8000);
}

placeOrder();