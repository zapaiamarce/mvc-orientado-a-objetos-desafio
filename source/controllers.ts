import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action?: "get" | "save" | null;
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action == "get" && options.params) {
      return this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return this.contacts.getAll();
    }
  }
}

// const prueba = new ContactsController();
// const salida = prueba.contacts;
// console.log(salida);

export { ContactsController };
