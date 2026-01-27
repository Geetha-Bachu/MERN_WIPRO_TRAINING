"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. ContactManager class
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
        this.nextId = 1;
    }
    // Add a new contact
    ContactManager.prototype.addContact = function (contact) {
        var newContact = {
            id: this.nextId,
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        };
        this.nextId++;
        this.contacts.push(newContact);
        console.log("✓ Contact added successfully:", newContact.name, "(ID:", newContact.id + ")");
    };
    // View all contacts
    ContactManager.prototype.viewContacts = function () {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
            return [];
        }
        console.log("\n=== Contact List ===");
        console.log("ID|   Name      |  Email              |  Phone");
        console.log("------------------------------------------");
        for (var i = 0; i < this.contacts.length; i++) {
            var c = this.contacts[i];
            console.log(c.id + " | " +
                c.name + " | " +
                c.email + " | " +
                c.phone);
        }
        console.log("------------------------------------------\n");
        return this.contacts;
    };
    // Modify existing contact
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var found = false;
        for (var i = 0; i < this.contacts.length; i++) {
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
                console.log("✓ Contact updated successfully (ID:", id + ")");
                break;
            }
        }
        if (!found) {
            console.log("✗ Error: Contact with ID", id, "not found.");
        }
    };
    // Delete a contact
    ContactManager.prototype.deleteContact = function (id) {
        var index = -1;
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id === id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            console.log("✗ Error: Contact with ID", id, "not found. Cannot delete.");
            return;
        }
        var deletedName = this.contacts[index].name;
        this.contacts.splice(index, 1);
        console.log("✓ Contact deleted successfully:", deletedName, "(ID:", id + ")");
    };
    return ContactManager;
}());
// 3. Testing the Contact Manager
function runTests() {
    console.log("=== Contact Manager - Demo ===\n");
    var manager = new ContactManager();
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
