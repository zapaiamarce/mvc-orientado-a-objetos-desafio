import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    var resultado: any;
    if ((options.action == "get")) {
      if (options.params.id) {
        resultado = this.contacts.getOneById(options.params.id);
      } else {
        resultado = this.contacts.getAll();
      }
    } else if ((options.action == "save") && options.params) {
      this.contacts.addOne(options.params)
      this.contacts.save();
      resultado = { message: "Contacto agregado exitosamente", contact: options.params };
    }
    return resultado;
  }
}

export { ContactsController };
