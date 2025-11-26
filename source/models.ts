// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contacts: Contact[] = [];

  load() {
    const jsonfile = require("jsonfile");
    this.contacts = jsonfile.readFileSync("./source/contacts.json");
  }

  getAll() {
    return this.contacts;
  }

  addOne(contact: Contact) {
    this.contacts.push(contact);
    const jsonfile = require("jsonfile");
    jsonfile.writeFileSync("./source/contacts.json", this.contacts);
  }

  save() {
    const jsonfile = require("jsonfile");
    jsonfile.writeFileSync(
      "./source/contacts.json",
      jsonfile.readFileSync("./source/contacts.json")
    );
  }

  getOneById(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
}
export { ContactsCollection };
