import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

export class ContactsCollection {
  contactList: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.contactList = json;
  }
  getAll() {
    return this.contactList;
  }
  addOne(contact: Contact) {
    this.contactList.push(contact);
  }
  save() {
    const lista = this.contactList;
    jsonfile.writeFileSync(__dirname + "/contacts.json", lista);
  }
  getOneById(id: number) {
    return this.contactList.find((contact) => contact.id === id);
  }
}
