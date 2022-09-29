import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contactos: Contact[] = [];

  load() {
    this.contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
  }

  getAll() {
    return this.contactos;
  }

  addOne(contact: Contact) {
    this.contactos.push(contact);
  }

  save() {
    this.load();
    jsonfile.writeFileSync("./source/contacts.json", this.contactos);
  }

  getOneById(id: number) {
    const data = this.contactos;
    return data.find((contact) => contact.id == id);
  }
}
export { ContactsCollection };
