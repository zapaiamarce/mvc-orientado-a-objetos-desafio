//import * as contac from "./contacts.json";
import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contact: Contact[] = [];
  load() {
    const contactJson = jsonfile.readFileSync("./contacts.json");
    this.contact = contactJson;
  }

  getAll() {
    return this.contact;
  }
  addOne(contact: Contact) {
    this.contact.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.contact);
  }
  getOneById(id: number) {
    return this.contact.find((e) => e.id === id);
  }
}
export { ContactsCollection };
