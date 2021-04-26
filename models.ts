import * as fs from "fs";
import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    const contactsJson = jsonfile.readFileSync(__dirname + "/contacts.json");
    contactsJson.forEach((item) => {
      this.contacts.push(item);
    });
  }
  //usar jsonfile me ahorra de usar toString() y luego parsear el JSON
  getAll() {
    return this.contacts;
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.contacts);
  }
  getOneById(id: number) {
    const IdEncontrado = this.contacts.find((item) => {
      return item.id == id;
    });
    return IdEncontrado;
  }
}

export { ContactsCollection };

// function main() {
//   const contacts = new ContactsCollection();
//   const contactsLoad = contacts.load();
// }

// main();
