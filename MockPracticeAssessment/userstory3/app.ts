import { Customer, VIPCustomer, CustomerType } from "./customer";

// Customer List 
const customers: Customer[] = [
  new Customer(1, "Alice", CustomerType.Regular, ["alice@mail.com", 123456789]),
  new VIPCustomer(2, "Bob", ["bob@mail.com", 987654321], 20)
];

for (const customer of customers) {
  customer.displayInfo();
}
