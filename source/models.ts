import * as jsonfile from "jsonfile";
import * as fs from "fs";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  collection: Contact[] = [];

  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.collection = json;
  }
  getAll() {
    return this.collection;
  }
  addOne(contact: Contact) {
    this.collection.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.collection);
  }
  getOneById(id) {
    return this.collection.find((contact) => contact.id == id);
  }
}

export { ContactsCollection, Contact };
