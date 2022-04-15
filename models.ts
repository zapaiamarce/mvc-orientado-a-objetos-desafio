import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const loadData = jsonfile.readFileSync("./contacts.json");
    this.data = loadData;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id: number) {
    const contactFound = this.data.find((i) => i.id == id);
    return contactFound;
  }
}

export { ContactsCollection };
