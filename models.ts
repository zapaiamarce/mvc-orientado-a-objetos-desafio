import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    this.data = jsonfile.readFileSync("./contacts.json");
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    const contactoEncontrado = this.data.find((c) => c.id === contact.id);
    if (!contactoEncontrado) {
      this.data.push(contact);
    }
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id: number) {
    return this.data.find((c) => c.id === id);
  }
}
export { ContactsCollection };
