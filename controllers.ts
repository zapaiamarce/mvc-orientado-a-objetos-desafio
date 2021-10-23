import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
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
    if(options.action == "get"){
      const resultado = options.params.id ? this.contacts.getOneById(options.params.id) : this.contacts.getAll();
      return resultado;
    }
    this.contacts.addOne(options.params);
    this.contacts.save();
  }
}

export { ContactsController };
