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

//TASK 7 - Searching for a Customer
let customers = ["Alice", "Bob", "Charlie", "David"]; // lists names of customers
let foundCustomer = customers.find(name => name === "Charlie"); // finds the customer Charlie

console.log(foundCustomer);

//TASK 8 - Calculate taxes
function calculateTax(amount, taxRate){ // defines the tax calc function
    let tax = amount * taxRate; // calculates tax
    console.log(`Tax on $${amount} at ${taxRate * 100}%: $${tax}`); // logs tax information
    return tax;
}

//TASK 9 - Applying Discounts
let applyDiscount = function(price, discount) { // defines discount function
    let discountedPrice = price - (price * discount); // calculates discounted price
    console.log(`Discounted price: $${discountedPrice}`); // logs discounted price
    return discountedPrice;
}

//TASK 10 - Calculate Loyalty Points
let calculatePoints = purchaseAmount => { // defines arrow function for points
    let points = Math.floor(purchaseAmount / 10); // applies one point per ten dollars spent
    console.log(`Points Earned: ${points}`); // logs loyalty points earned
    return points;
}

