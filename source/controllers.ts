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
    var resultado 
    if(options.action == "get" && options.params.id) {
      resultado = this.contacts.getOneById(options.params.id)
    } else if (options.action == "get" && !options.params.id) {
      resultado = this.contacts.getAll();
    } else if (options.action == "save") {
      this.contacts.addOne(options.params);
    }
    return resultado
  }
}

export { ContactsController };
