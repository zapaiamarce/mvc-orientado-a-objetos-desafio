// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as fs from "fs";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  constructor() {}

  load() {
    const contenidoDelArchivo = fs
      .readFileSync(__dirname + "/contacts.json")
      .toString();
    this.data = JSON.parse(contenidoDelArchivo);

    return this.data;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
    return this.data;
  }
  save() {
    const dataString = JSON.stringify(this.data, null, 2); // se convierte el array data a tipo string
    fs.writeFileSync(__dirname + "/contacts.json", dataString); // se guarda en el archovo JSON
  }
  getOneById(id: number) {
    const encontrado = this.data.find((contact) => contact.id === id);
    if (!encontrado) {
      console.error("Contact not found");
      return null;
    } else {
      return encontrado;
    }
  }
}

export { ContactsCollection };
