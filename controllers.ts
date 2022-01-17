import { ContactsCollection } from "./models";
import { Contact } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: { id: number; name: string };
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get") {
      const contactoEncontrado = this.contacts.getOneById(options.params.id);
      if (contactoEncontrado == undefined) {
        return this.contacts.getAll();
      } else {
        return contactoEncontrado;
      }
    } else {
      var nuevoContacto = { id: options.params.id, name: options.params.name };
      this.contacts.addOne(nuevoContacto);
      return this.contacts.datos;
    }
  }
}
/*
function main() {
  const contactoControl = new ContactsController();
  contactoControl.contacts.load();
  console.log(contactoControl.contacts.datos);
  console.log(contactoControl.contacts.getAll());
  var opciones = new ContactsControllerOptions();
  //tengo que inicializarlo al opciones.params sino me lo toma como undefined
  opciones.params = new Contact();
  opciones.action = "get";
  opciones.params.id = 2;
  var encontrado = contactoControl.processOptions(opciones);
  console.log(encontrado);
}
main();
*/
export { ContactsController };
