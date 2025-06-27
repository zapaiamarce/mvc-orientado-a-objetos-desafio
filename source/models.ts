// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "fs"
import * as fs from "fs";
const filePath = __dirname + "/contacts.json";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  private contacts: Contact[] = [];

  load() {
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      this.contacts = JSON.parse(fileContent);
    } catch (e) {
      // Si el archivo no existe o está vacío, inicializa como array vacío
      this.contacts = [];
    }
  }

  getAll() {
    return this.contacts;
  }
  addOne(contact: Contact) {
    this.contacts.push(contact);
  }

  save() {
    fs.writeFileSync(filePath, JSON.stringify(this.contacts, null, 2));
  }
  getOneById(id: number) {
    for (let c of this.contacts) {
      if (id === c.id) {
        return c;
      }
    }
    return null;
  }
}
export { ContactsCollection };
