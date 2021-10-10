import * as jsonfile from 'jsonfile';
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync('./contacts.json');
    this.contacts = json;
  }
  getAll(): Contact[] {
    return this.contacts;
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    jsonfile.writeFileSync('./contacts.json', this.contacts);
  }
  getOneById(id: number): Contact {
    return this.contacts.find((contact) => contact.id === id);
  }
}

export { ContactsCollection, Contact };
