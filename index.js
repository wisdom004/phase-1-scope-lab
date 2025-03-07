var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'karen';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'nancy';  
}