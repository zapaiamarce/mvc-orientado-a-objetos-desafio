// este import existe solo para que tsc lo tome y lo copie a /build
import * as jsonData from "./contacts.json";
import * as fs from "fs";
import * as path from "path";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  private data: any[] = [];
  private filePath = path.resolve(__dirname, "contacts.json");

  load() {
    const file = fs.readFileSync(this.filePath).toString();
    this.data = JSON.parse(file);
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    if (contact == null) {
      throw new Error("Contacto vacio");
    }

    this.data.push(contact);
  }

  save() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
  }

  getOneById(id) {
    return this.data.find((contacto) => contacto.id == id);
  }
}

export { ContactsCollection };
