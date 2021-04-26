import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: any[] = [];
  load() {
    const parsedFile = jsonfile.readFileSync("./contacts.json");
    parsedFile.map((object: Contact) => this.contacts.push(object));
  }
  getAll() {
    return this.contacts;
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    const data = this.contacts;
    jsonfile.writeFileSync("./contacts.json", data)
  }
  getOneById(id: number) {
    return this.contacts.find(contact => contact.id == id)
  }
}

export { ContactsCollection, Contact };