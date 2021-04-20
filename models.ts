import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    this.data = jsonfile.readFileSync(__dirname + "/contacts.json");
  }
  addOne(newContact: Contact) {
    this.data.push(newContact);
  }
  getAll() {
    return this.data;
  }
  getOneById(id: number) {
    return this.data.find((e) => e.id === id);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
}
export { ContactsCollection };
