import * as jsonfile from "jsonfile";
import { dirname } from "path";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = []; // propiedad interna donde se guarde el array con la data

  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = json; // Reemplazar el array existente con los datos cargados
  }

  //------------------------------------------------------------

  getAll() {
    // devuelve ContacsCollection(objeto)
    return this.data;
  }
  //------------------------------------------------------------

  addOne(contact: Contact) {
    // agrega un contacto a la lista
    this.data.push(contact);
  }
  //------------------------------------------------------------
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }

  //------------------------------------------------------------
  getOneById(id: number) {
    // buscar por id
    const idEncontrado = this.data.find((contact) => contact.id === id);
    return idEncontrado;
  }
}
export { ContactsCollection, Contact };
