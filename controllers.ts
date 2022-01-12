import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contactCollections: ContactsCollection;
  constructor(contactCollections: ContactsCollection) {
    //Instancia ContactsCollection
    this.contactCollections = contactCollections; // Lo guarda en una propiedad Interna
    const loadNecesario = new ContactsCollection(); //Invoca el metodo .load() y carga la data
    loadNecesario.load();
  }
  processOptions(options: ContactsControllerOptions) {
    const claseCalleada = new ContactsCollection();
    if (
      // Si recibe "get" y confirma que existe un contacto, devuelve el contacto
      options.action == "get" &&
      claseCalleada.getOneById(options.params) != undefined
    ) {
      return claseCalleada.getOneById(options.params);
    } else if (
      // Si recibe "get" y confirma que NO existe un contacto, devuelve todos los contactos
      options.action == "get" && //S
      claseCalleada.getOneById(options.params) == undefined
    ) {
      return claseCalleada.getAll();
    } else if (options.action == "save") {
      // Si recibe "save", agrega al contacto.
      claseCalleada.addOne(claseCalleada.getOneById(options.params));
    }
  }
}
export { ContactsController };
