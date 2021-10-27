import * as jsonfile from 'jsonfile';

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    //carga la data desde el JSON
    const file = './contacts.json';
    const contacts = jsonfile.readFileSync(file);
    this.contacts = contacts;
  }
  getAll(): Contact[] {
    //devuelve la collection completa
    return this.contacts;
  }
  addOne(contact: Contact) {
    //agrega un contacto a la lista
    this.contacts.push(contact);
  }
  save() {
    //escribe el objeto en el json
    var contacts = this.contacts;
    var file = './contacts.json';
    jsonfile.writeFileSync(file, contacts);
  }
  getOneById(id): Contact {
    //no shit sherlock
    return this.contacts.find((e) => e.id == id);
  }
}

export { ContactsCollection };
