import { ContactsCollection, Contact } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: Contact;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    let resultado;

    if (options.action === "get" && options.params.id) {
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action === "get" && options.params.name) {
      resultado = this.contacts.getOneByName(options.params.name);
    } else if (options.action === "get") {
      resultado = this.contacts.getAll();
    } else if (options.action === "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }

    return resultado;
  }
}

export { ContactsController };
