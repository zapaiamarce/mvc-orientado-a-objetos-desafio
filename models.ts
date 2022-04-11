import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const loadInfo = jsonfile.readFileSync("./contacts.json");
    this.data = loadInfo;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    return this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    const contactFound = this.data.find((i) => i.id == id);
    return contactFound;
  }
}

export { ContactsCollection };
