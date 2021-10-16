import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    const contactos = this.data;
    contactos.push(contact);
    return this.data;
  }
  save() {
    const readfile = jsonfile.writeFileSync("./contacts.json", this.data);
    return readfile;
  }
  getOneById(id) {
    const encontrado = this.data.find(c => {
      if (c.id == id) {
        return true;
      }
    });
    return encontrado;
  }
}

export { ContactsCollection, Contact };
