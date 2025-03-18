import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | "getAll";
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    var resultado;
    if (options.action == "get" && options.params.id) {
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      resultado = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      resultado = options.params;
    } else if (options.action == "getAll") {
      resultado = this.contacts.getAll();
    }
    return resultado;
  }
}

export { ContactsController };
