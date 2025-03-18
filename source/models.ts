// este import existe solo para que tsc lo tome y lo copie a /build
import * as path from "path";
import * as jsonfile from "jsonfile";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const filePath = path.join(__dirname, 'contacts.json' );
    this.data = jsonfile.readFileSync(filePath);
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    const filePath = path.join(__dirname, "contacts.json");
    jsonfile.writeFileSync(filePath, this.data);
  }
  getOneById(id) {
    return this.data.find((contact) => contact.id == id);
  } 
}
export { ContactsCollection };
