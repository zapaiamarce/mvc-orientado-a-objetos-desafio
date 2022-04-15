import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    // su constructor debe:
    //  - instanciar **ContactsCollection** y guardarlo en una prop interna
    //  - invocar al método load (para que se carge la data del archivo **contacts.json**)
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    //dependiendo de las propiedades **action** y **params** debe interactuar con el modelo (ContactsController) e invocar distintos métodos
    //  - en el caso de que el **action** sea "get" y el objeto **params** tenga un id, debe devolver un contacto en particular, si **id** no existe significa que debe devolver todos los contactos
    //  - en el caso de que **action** sea "save" **params** es lo que se debe usar como contacto nuevo
    let respuesta;
    if (options.action == "get" && options.params) {
      respuesta = this.contacts.getOneById(options.params);
    } else if (options.action == "get") {
      respuesta = this.contacts.getAll();
    } else if (options.action == "save") {
      options.params = JSON.parse(options.params);
      respuesta = this.contacts.addOne(options.params);
    }
    return respuesta;
  }
}
export { ContactsController };
