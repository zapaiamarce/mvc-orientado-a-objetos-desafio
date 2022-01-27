import { readFileSync } from "jsonfile";
import { writeFileSync } from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contactos: Contact[] = [];

  load() {
    this.contactos = readFileSync("contacts.json");
  }

  getAll() {
    return this.contactos;
  }

  addOne(contacto: Contact) {
    this.contactos.push(contacto);
  }

  getOneById(id: number) {
    return this.contactos.find((x) => {
      return x.id == id;
    });
  }
  save() {
    writeFileSync("contacts.json", this.contactos);
  }
}
export { ContactsCollection };
