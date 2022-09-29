import * as contacts from "./contacts.json";
import * as fs from "fs";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  collection: Contact[] = [];

  load() {
    this.collection.push(...contacts);
  }
  getAll() {
    return this.collection;
  }
  addOne(contact) {
    this.collection.push(contact);
  }
  save() {
    fs.writeFileSync(
      __dirname + "/contacts.json",
      JSON.stringify(this.collection)
    );
  }
  getOneById(id) {
    return this.collection.find((contact) => contact.id == id);
  }
}

export { ContactsCollection, Contact };
