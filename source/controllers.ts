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
    let resultado = {};
    if (options.action === "get") {
      if (
        options.params.hasOwnProperty("id") &&
        options.params.id !== undefined
      ) {
        resultado = this.contacts.getOneById(options.params.id);
      } else {
        resultado = this.contacts.getAll();
      }
    } else if (options.action === "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultado;
  }
}

export { ContactsController };
