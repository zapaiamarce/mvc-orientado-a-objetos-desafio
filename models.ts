import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const contactsJson = jsonfile.readFileSync("./contacts.json");
    this.data = contactsJson;
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
    return this.data.find((item) => item.id === id);
  }
}

export { ContactsCollection };
