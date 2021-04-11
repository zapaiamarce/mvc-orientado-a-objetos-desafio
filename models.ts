import * as jsonfile from "jsonfile";
const contactsRoute = "contacts.json";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  information: Contact[] = [];
  load() {
    const jsonContacts = jsonfile.readFileSync(contactsRoute);
    this.information = jsonContacts;
  }
  getAll() {
    return this.information;
  }
  addOne(contact: Contact) {
    this.information.push(contact);
  }
  save() {
    jsonfile.writeFileSync(contactsRoute, this.information);
  }
  getOneById(id: number) {
    const arr = this.information;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].id == id) {
        return arr[index];
      }
    }
  }
}
export { ContactsCollection };
