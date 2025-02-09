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
