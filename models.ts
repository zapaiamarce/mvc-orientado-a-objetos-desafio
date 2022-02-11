import * as contacts from "./contacts.json";
import * as fs from "fs";
import * as find from "lodash/find";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    this.contacts = contacts;
  }
  getAll(): Contact[] {
    return this.contacts;
  }
  getOneById(id: number) {
    return find(this.contacts, (item: Contact) => item.id == id);
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    const data = JSON.stringify(this.contacts, null, 2);
    fs.writeFileSync("./contacts.json", data, "utf8");
  }
}
export { ContactsCollection };
