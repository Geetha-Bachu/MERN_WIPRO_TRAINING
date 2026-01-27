"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
// Customer List 
var customers = [
    new customer_1.Customer(1, "Alice", customer_1.CustomerType.Regular, ["alice@mail.com", 123456789]),
    new customer_1.VIPCustomer(2, "Bob", ["bob@mail.com", 987654321], 20)
];
for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
    var customer = customers_1[_i];
    customer.displayInfo();
}
