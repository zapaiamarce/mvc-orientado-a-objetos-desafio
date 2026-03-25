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
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("source/contacts.json");
    this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id: number) {
    return this.data.find((contact) => contact.id === id);
  }
  
}
export { ContactsCollection,Contact };
