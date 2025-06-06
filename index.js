// Write your solution in this file!

// Declare global variable
var customerName = 'bob';

// Uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare a global variable from inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // No `var`, `let`, or `const` — becomes global
}

// Overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// Try to change the constant (will throw error if executed)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; 
}
