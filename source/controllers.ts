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
    let resultado;
    if (options.action === "get" && !options.params) {
      resultado = this.contacts.getAll();
    }
    if (options.action === "get" && options.params) {
      resultado = this.contacts.getOneById(options.params.id);
    }
    if (options.action === "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
      resultado = "Se ha guardado";
    }
    return resultado;
  }
}

export { ContactsController };
