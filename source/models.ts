// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

export class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: any[] = [];
  load() {
    const jf = require("jsonfile");
    this.data = jf.readFileSync(__dirname + "/contacts.json");
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    const jf = require("jsonfile");
    jf.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id: number) {
    return this.data.find((contact) => contact.id === id);
  }
}
export { ContactsCollection };
