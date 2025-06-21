// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from "jsonfile";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  dataContacts: Contact[];
  constructor() {
    this.dataContacts = [];
  }

  load() {
    this.dataContacts = jsonfile.readFileSync("./source/contacts.json");
  }

  getAll() {
    return this.dataContacts;
  }

  addOne(contact: Contact) {
    this.dataContacts.push(contact);
  }

  save() {
    jsonfile.writeFileSync("./source/contacts.json", this.dataContacts, {
      spaces: 2,
    });
  }

  getOneById(id) {
    const contact = this.dataContacts.find((c) => c.id === id);
    return contact ? contact : "Contacto no encontrado";
  }
}

export { ContactsCollection };
