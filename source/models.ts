// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";

const CONTACTS_FILE = __dirname + "/contacts.json";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    try {
      this.data = jsonfile.readFileSync(CONTACTS_FILE);
    } catch {
      this.data = [];
    }
  }

  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    // Buscamos si ya existe un contacto con ese mismo id en el array `data`
    const index = this.data.findIndex((c) => c.id === contact.id);

    if (index >= 0) {
      // Si ya existe un contacto con ese id, lo reemplazamos
      this.data[index] = contact;
    } else {
      // Si no existe, lo agregamos al final del array
      this.data.push(contact);
    }
  }
  save() {
    jsonfile.writeFileSync(CONTACTS_FILE, this.data);
  }

  getOneById(id) {
    return this.data.find((contacto) => contacto.id == id);
  }
}
export { ContactsCollection };
