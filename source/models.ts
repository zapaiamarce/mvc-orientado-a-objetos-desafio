// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contacts: Contact[] = [];

  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.contacts = json;
  }

  getAll() {
    return this.contacts;
  }

  addOne(contact: Contact) {
    this.contacts.push(contact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.contacts);
  }

  getOneById(id: number) {
    return this.contacts.find((c) => c.id === id);
  }
}

export { ContactsCollection };
