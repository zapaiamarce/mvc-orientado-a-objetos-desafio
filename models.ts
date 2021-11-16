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
    jsonfile.writeFile("./contacts.json", this.data);
  }
  getOneById(id: number) {
    return this.data.find((contact) => contact.id == id);
  }
}
export { ContactsCollection };
