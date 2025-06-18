// este import existe solo para que tsc lo tome y lo copie a /build
import contactsObject from "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as jsonfile from "jsonfile";
const pathFile = __dirname + "/contacts.json";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contactos: Contact[];
  constructor() {
    this.contactos = [];
  }

  load() {
    this.contactos = jsonfile.readFileSync(pathFile);
  }

  getAll() {
    return this.contactos;
  }
  addOne(nuevoContacto: Contact) {
    this.contactos.push(nuevoContacto);
  }
  save() {
    jsonfile.writeFileSync(pathFile, this.contactos, {
      spaces: 2,
    });
  }
  getOneById(id: number) {
    const contactoEncontrado = this.contactos.find((item) => item.id === id);
    if (contactoEncontrado) return contactoEncontrado;
    else return "Contacto no encontrado";
  }
}
export { ContactsCollection };
