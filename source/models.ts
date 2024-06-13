import * as fs from "fs";
import * as path from "path";

export class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  constructor() {
    this.data = [];
  }

  load() {
    const dataParsed = JSON.parse(fs.readFileSync(path.join(__dirname, "contacts.json"), "utf-8"));
    this.data = dataParsed;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    fs.writeFileSync(path.join(__dirname, "contacts.json"), JSON.stringify(this.data, null, 2));
  }

  getOneById(id: number) {
    const foundContact = this.data.find((d) => d.id === id);
    if (foundContact) {
      return foundContact;
    } else {
      return "No se encontró el contacto";
    }
  }
}

export { ContactsCollection };
