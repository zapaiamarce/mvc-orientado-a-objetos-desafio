import { readFileSync } from "jsonfile";
import { writeFileSync } from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  load() {
    this.contacts = readFileSync(__dirname + "/contacts.json");
  }
  getAll() {
    return this.contacts;
  }
  addOne(contact: { id: number; name: string }) {
    this.contacts.push(contact);
  }
  save() {
    writeFileSync(__dirname + "/contacts.json", this.contacts);
  }
  getOneById(id: number): { id: number; name: string } {
    return this.contacts.find(function (i) {
      return i["id"] === id;
    });
  }
  contacts: Contact[] = [];
}
export { ContactsCollection };
