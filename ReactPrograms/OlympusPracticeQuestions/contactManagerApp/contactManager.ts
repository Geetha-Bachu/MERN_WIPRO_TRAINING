export {}; // prevents duplicate identifier errors

// 1. Define the Contact interface
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// 2. ContactManager class
class ContactManager {
  private contacts: Contact[] = [];
  private nextId: number = 1;

  // Add a new contact
  addContact(contact: { name: string; email: string; phone: string }): void {
    const newContact: Contact = {
      id: this.nextId,
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    };

    this.nextId++;
    this.contacts.push(newContact);

    console.log("Contact added successfully:", newContact.name, "(ID:", newContact.id + ")");
  }

  // View all contacts
  viewContacts(): Contact[] {
    if (this.contacts.length === 0) {
      console.log("No contacts found.");
      return [];
    }

    console.log("\n=== Contact List ===");
    console.log("ID|   Name      |  Email              |  Phone");
    console.log("------------------------------------------");

    for (let i = 0; i < this.contacts.length; i++) {
      const c = this.contacts[i];
      console.log(
        c.id + " | " +
        c.name + " | " +
        c.email + " | " +
        c.phone
      );
    }

    console.log("------------------------------------------\n");
    return this.contacts;
  }

  // Modify existing contact
  modifyContact(id: number, updatedContact: { name?: string; email?: string; phone?: string }): void {
    let found = false;

    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        if (updatedContact.name !== undefined) {
          this.contacts[i].name = updatedContact.name;
        }
        if (updatedContact.email !== undefined) {
          this.contacts[i].email = updatedContact.email;
        }
        if (updatedContact.phone !== undefined) {
          this.contacts[i].phone = updatedContact.phone;
        }

        found = true;
        console.log(" Contact updated successfully (ID:", id + ")");
        break;
      }
    }

    if (!found) {
      console.log(" Error: Contact with ID", id, "not found.");
    }
  }

  // Delete a contact
  deleteContact(id: number): void {
    let index = -1;

    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("Error: Contact with ID", id, "not found. Cannot delete.");
      return;
    }

    const deletedName = this.contacts[index].name;
    this.contacts.splice(index, 1);

    console.log(" Contact deleted successfully:", deletedName, "(ID:", id + ")");
  }
}

// 3. Testing the Contact Manager
function runTests(): void {
  console.log("=== Contact Manager - Demo ===\n");

  const manager = new ContactManager();

  // Add contacts
  manager.addContact({
    name: "Alice Johnson",
    email: "alice.j@example.com",
    phone: "+91-9876543210"
  });

  manager.addContact({
    name: "Bob Smith",
    email: "bob.smith@gmail.com",
    phone: "+91-8765432109"
  });

  manager.addContact({
    name: "Priya Sharma",
    email: "priya.sharma@work.in",
    phone: "+91-7654321098"
  });

  // View contacts
  manager.viewContacts();

  // Modify contact
  manager.modifyContact(2, {
    name: "Robert Smith",
    phone: "+91-9998887776"
  });

  console.log("After modification:");
  manager.viewContacts();

  // Modify non-existing contact
  manager.modifyContact(99, { name: "Ghost User" });

  // Delete contact
  manager.deleteContact(1);

  console.log("After deletion:");
  manager.viewContacts();

  // Delete non-existing contact
  manager.deleteContact(100);
}

// Run tests
runTests();