// Prepared by:
// Name: Karan Singh
// RId: R52376

const cart = ["Pizza", "coke", "Biskit"];

function placeOrder(cart) {
    console.log("Taking with Domino's");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const food_available = true;
            if (food_available) {
                console.log("Order Placed Successfully");
                const order = { orderId: 121, food: cart, restaurant: "Dominos", location: "Dwarka" };
                resolve(order);
            } else {
                reject("Items Out of Stocks");
            }
        }, 2000);
    });
}

function preparingOrder(order) {
    console.log("Pizza preparation started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pizza preparation Done");
            const foodDetails = { token: 12, restaurant: order.restaurant, location: order.location };
            resolve(foodDetails);
        }, 5000);
    });
}

function pickupOrder(foodDetails) {
    console.log("Reaching restaurant for picking order");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
        }, 3000);
    });
}

function deliverOrder(droplocation) {
    console.log("Delivery boy on the way");
    setTimeout(() => {
        console.log("order Delivered successfully");
    }, 5000);
}

placeOrder(cart)
    .then((order) => preparingOrder(order))
    .then((foodDetails) => pickupOrder(foodDetails))
    .then((droplocation) => deliverOrder(droplocation))
    .catch((error) => console.log(error));