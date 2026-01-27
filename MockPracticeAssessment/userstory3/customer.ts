import { LogCreation } from "./decorator";

// Enum (Type Safety)
export enum CustomerType {
  Regular = "Regular",
  VIP = "VIP"
}

// Tuple 
export type ContactInfo = [string, number]; // [email, phone]

// Interface
export interface ICustomer {
  id: number;
  name: string;
  type: CustomerType;
  contact: ContactInfo;
  displayInfo(): void;
}


@LogCreation
export class Customer implements ICustomer {
  constructor(
    public id: number,
    public name: string,
    public type: CustomerType,
    public contact: ContactInfo
  ) {}

  displayInfo(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Type: ${this.type}`);
  }
}

// Inheritance 
export class VIPCustomer extends Customer {
  constructor(
    id: number,
    name: string,
    contact: ContactInfo,
    public discount: number
  ) {
    super(id, name, CustomerType.VIP, contact);
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Discount: ${this.discount}%`);
  }
}
