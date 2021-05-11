import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[];
  constructor() {
    this.data = [];
  }

  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.data = json;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    return this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }

  getOneById(id) {
    return this.data.find((contact) => contact.id == id);
  }
}

export { ContactsCollection };
