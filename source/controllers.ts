import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && options.params.id) {
      const contacto = this.contacts.getOneById(options.params.id);
      if (!contacto) {
        return "No existe un contacto con esa Id";
      } else {
        return contacto;
      }
    } else if (options.action === "get" && !options.params.id) {
      return this.contacts.getAll();
    } else if (options.action === "save") {
      if (!this.contacts.getOneById(options.params.id)) {
        this.contacts.addOne(options.params);
        this.contacts.save();
        return "Contacto agregado correctamente";
      } else {
        return "Ya existe un contacto con esa Id";
      }
    }
    return "Action no es ni get ni save";
  }
}

export { ContactsController };
