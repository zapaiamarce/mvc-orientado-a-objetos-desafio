import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const dataJson = jsonfile.readFileSync("./contacts.json");
    this.data = dataJson;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }

  getOneById(id: Number) {
    return this.data.find((x) => x.id == id);
  }
}
export { ContactsCollection };
