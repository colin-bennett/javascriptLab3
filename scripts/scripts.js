"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    // Makes a new Contact instance and adds it to this AddressBook’s contacts
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  delete(name) {
    // Removes a contact based on the provided name
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    if (index >= 0) {
      this.contacts.splice(index, 1);
    }
  }
  print() {
    // Logs each element of the contacts array to the console
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
addressBook.print();
// addressBook.add(new Contact("Sarah", "sarah@gmail.com", "333-333-3333", "friend");
addressBook.add("Joe", "joe@gmail.com", "111-222-2222", "brother");
addressBook.add("John", "john@gmail.com", "111-333-3333", "father");
addressBook.add("Sarah", "sarah@gmail.com", "111-444-4444", "father");
addressBook.print();
addressBook.delete("Joe");
addressBook.print();
