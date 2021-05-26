import { openSync } from "node:fs";
import { ContactsCollection } from "./models";

class ContactsControllerOptions {
  constructor(accion: "get" | "save", parametro: any) {
    this.action = accion;
    this.params = parametro;
  }
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

    if (options.action == "get" && options.params.id) {
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      resultado = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultado;
  }
}
export { ContactsController, ContactsControllerOptions };
