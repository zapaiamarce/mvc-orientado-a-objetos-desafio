// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as fs from "fs";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

function readFile(path) {
  const file = fs.readFileSync(path).toString();
  const data = JSON.parse(file);
  return data;
}

class ContactsCollection {
  contacts: Contact[];
  constructor() {
    this.contacts = [];
  }
  load() {
    let currentContacts = fs.readFileSync("source/contacts.json").toString();
    this.contacts = JSON.parse(currentContacts);
  }
  getAll() {
    return this.contacts;
  }
  addOne(contact: Contact) {
    const alreadyExisting = this.contacts.find(
      (c: Contact) => c.id === contact.id
    );

    if (alreadyExisting) {
      throw "AddOne : Trying to create a new user using an already in use ID";
    }
    this.contacts.push(contact);
    return this.contacts;
  }
  getOneById(id: number) {
    const result = this.contacts.find((c: Contact) => c.id == id);
    if (result) {
      return result;
    }
    throw "getOneById : Usuario con el ID indicado no existente.";
  }
  save() {
    return fs.writeFileSync(
      "source/contacts.json",
      JSON.stringify(this.contacts)
    );
  }
}

export { ContactsCollection, readFile };
