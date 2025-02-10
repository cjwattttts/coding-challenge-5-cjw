// TASK 1 - Creating Customer Profile
let customer = { // establishes customer details
    name: "John Doe", 
    age: 35,
    email: "john.doe@email.com"
};

console.log(`Customer Name: ${customer.name}`); // logs customer name 
console.log(`Customer Age: ${customer.age}`); // logs customer age
console.log(`Customer Email: ${customer.email}`); // logs customer email

// TASK 2 - Creating Order Details
let order = { // establishes order details
    orderId: 12345,
    totalAmouint: 150,
    status: "Processing:"
displayOrder: function() {

    console.log(`Order ID: ${this.orderId}`); // logs order ID
    console.log(`Total Amount: ${this.totalAmount}`); // logs the total order amount
    console.log(`Order Status: ${this.status}`); // logs the order status
}
};

//TASK 3 - Managing Shopping Cart
let cartItems = ["Eggs, Milk, Chicken"]; // establishes initial cart
cartItems.push("Orange Juice"); // adds orange juice
cartItems.pop(); // removes orange juice
cartItems.unshift("Kiwis") // adds kiwis to the beginning of the list
cartItems.shift(); // removes kiwis

console.log(cartItems); // logs finilized cart items 

//TASK 4 - Adjusting prices
let prices = [100, 200, 300]; // sets initial prices
let discountedPrices = prices.map(price => price * 0.9); // applies at 10 percent discount 

console.Log(discountedPrices); // logs the discounted prices

//TASK 5 - Filtering Products
let inventory = [5, 0, 12, 8, 0]; // declares product quantities
let availableStock = inventory.filter(quanitity => quanitity > 0); // removes products with zero stock

console.log(availableStock); // logs filtered out inventory
