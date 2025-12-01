// ...existing code...
import * as jsonfile from "jsonfile";
import * as path from "path";
import * as fs from "fs";

// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

const CONTACTS_PATH = path.join(process.cwd(), "source", "contacts.json");

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const raw = fs.readFileSync(CONTACTS_PATH, { encoding: "utf8" });
    const parsed = JSON.parse(raw);
    this.data = Array.isArray(parsed) ? parsed : parsed?.default ?? [];
  }

  getAll(): Contact[] {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    fs.writeFileSync(CONTACTS_PATH, JSON.stringify(this.data, null, 2), {
      encoding: "utf8",
    });
  }

  getOneById(id: number): Contact | null {
    const encontrado = this.data.find((contact) => contact.id === id);
    return encontrado || null;
  }
}
export { ContactsCollection, Contact };
// ...existing code...
