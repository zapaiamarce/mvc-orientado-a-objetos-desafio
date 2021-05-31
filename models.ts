import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  contactos: Contact[] = [];

  load() {
    this.contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
    return this.contactos;
  }
  getAll() {
    return this.contactos;
  }
  addOne(contact: Contact) {
    return this.contactos.push(contact);
  }
  save() {
    let file = __dirname + "/contacts.json";
    let guardar = this.contactos;
    return jsonfile.writeFileSync(file, guardar);
  }
  getOneById(contactId: number): Contact {
    let encontrado = this.contactos.find((idC) => {
      return contactId === idC.id;
    });
    return encontrado;
  }
}
export { ContactsCollection };
