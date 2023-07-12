import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection ;
  constructor() {
    const contact = new ContactsCollection()
    this.contacts = contact
    contact.load()
  }
  processOptions(options: ContactsControllerOptions) {
//     dependiendo de las propiedades action y params debe interactuar con el modelo (ContactsController) e invocar distintos métodos
// en el caso de que el action sea get y el objeto params tenga un id, debe devolver un contacto en particular, si id no existe significa que debe devolver todos los contactos
// en el caso de que action sea save, params es lo que se debe usar como contacto nuevo
  }
}

export { ContactsController };
