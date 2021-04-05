import * as jsonfile from "jsonfile";
import { readFileSync, writeFileSync } from "node:fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    //cargue la info desde el contacts.json y guardarla en data}
    const allContactsFromJson = jsonfile.readFileSync("./contacts.json");
    this.data = allContactsFromJson;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data = this.data.concat(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id: number): Contact {
    let encontrado = this.data.find((c) => c.id == id);
    return encontrado;
  }
}
export { ContactsCollection };
