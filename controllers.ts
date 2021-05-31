import { ContactsCollection } from "./models";

class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    let resultado;
    if (options.action === "get") {
      if (this.contacts.getOneById(options.params) == undefined) {
        return (resultado = this.contacts.getAll());
      } else {
        return (resultado = this.contacts.getOneById(options.params));
      }
    }
    if (options.action === "save") {
      this.contacts.addOne(options.params);
      return (resultado = this.contacts.save()), "guardado";
    }
    return resultado;
  }
}

export { ContactsController, ContactsControllerOptions };
