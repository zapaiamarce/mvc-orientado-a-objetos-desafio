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
  contacts: Contact[] = [];

  constructor() {}
  load() {
    this.contacts = jsonfile.readFileSync("./contacts.json");
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.contacts);
  }
  getAll() {
    return this.contacts;
  }
getOneById (id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
  deleteOneById(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}
export { ContactsCollection, Contact };
