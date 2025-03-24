// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import { readFileSync, writeFileSync } from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const rawData = readFileSync("source/contacts.json");
    this.data = rawData;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    // writeFileSync("contacts.json", this.data);
    writeFileSync(__dirname + "/contacts.json", this.data, { spaces: 2 });
  }

  getOneById(id: number) {
    return this.data.find((contact) => contact.id === id);
  }
}

export { ContactsCollection };
