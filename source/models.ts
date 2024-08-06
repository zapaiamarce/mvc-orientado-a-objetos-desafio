// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
    data: Contact[] = [];
    load() {
        const json = jsonfile.readFileSync("./contacts.json");
        this.data = json;
    }
    getAll() {
        return this.data;
    }
    addOne(contact: Contact) {
        this.data.push(contact);
    }
    save() {
        jsonfile.writeFileSync("./contacts.json", this.data);
    }
    getOneById(id: number) {
        const encontrado = this.data.find((contacto) => contacto.id == id);
        return encontrado;
    }
}
export { ContactsCollection, Contact };


