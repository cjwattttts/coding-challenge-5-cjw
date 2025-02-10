// TASK 1 - Creating Customer Profile
let customer = { // establishes customer details
    name: "John Doe", 
    age: 35,
    email: "john.doe@email.com"
};

console.log(`Customer Name: ${customer.name}`);  
console.log(`Customer Age: ${customer.age}`); 
console.log(`Customer Email: ${customer.email}`); 

// TASK 2 - Creating Order Details
let order = { // establishes order details
    orderId: 12345,
    totalAmouint: 150,
    status: "Processing:"
displayOrder: function() {

    console.log(`Order ID: ${this.orderId}`); 
    console.log(`Total Amount: ${this.totalAmount}`); 
    console.log(`Order Status: ${this.status}`); 
}
};

//TASK 3 - Managing Shopping Cart
let cartItems = ["Eggs, Milk, Chicken"]; // establishes initial cart
cartItems.push("Orange Juice"); // adds orange juice
cartItems.pop(); // removes orange juice
cartItems.unshift("Kiwis") // adds kiwis to the beginning of the list
cartItems.shift(); // removes kiwis

console.log(cartItems);  

//TASK 4 - Adjusting prices
let prices = [100, 200, 300]; // sets initial prices
let discountedPrices = prices.map(price => price * 0.9); // applies at 10 percent discount 

console.Log(discountedPrices); 

//TASK 5 - Filtering Products
let inventory = [5, 0, 12, 8, 0]; // declares product quantities
let availableStock = inventory.filter(quanitity => quanitity > 0); // removes products with zero stock

console.log(availableStock);

//TASK 6 - Calculating Revenue
let sales = [500, 300, 200, 400]; // sets sales amounts
let totalRevenue = sales.reduce((sum, num) => sum + num, 0); // calulcates total revenue

console.log(totalRevenue); 


