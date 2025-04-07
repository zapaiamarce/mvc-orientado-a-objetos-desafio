// este import existe solo para que tsc lo tome y lo copie a /build
import { readFileSync, writeFileSync } from 'jsonfile';
import './contacts.json';
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = '';
}

class ContactsCollection {
  contacts: Contact[] = [];

  load() {
    const data = readFileSync(__dirname + '/contacts.json');
    this.contacts = data;
  }

  getAll() {
    return this.contacts;
  }

  addOne(contact: Contact) {
    this.contacts.push(contact);
  }

  save() {
    writeFileSync(__dirname + '/contacts.json', this.contacts, { spaces: 2 });
  }

  getOneById(id: number) {
    return this.contacts.find(contact => contact.id === id);
  }
}

export { ContactsCollection, Contact };
