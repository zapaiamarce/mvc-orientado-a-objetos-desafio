import { ContactsCollection, Contact } from "./models";

class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contactsCollection = new ContactsCollection();
    this.contacts = contactsCollection;
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    let resultado: any;
    if (options.action == "get" && options.params) {
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      resultado = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      resultado = this.contacts.getOneById(options.params.id);
    }
    return resultado;
  }
}
export { ContactsController, ContactsControllerOptions };
