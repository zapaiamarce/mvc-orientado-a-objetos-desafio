import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const newContactsCollection = new ContactsCollection();
    this.contacts = newContactsCollection;
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id == true) {
      var id = options.params.id;
      return this.contacts.getOneById(id);
    }
    if (options.action == "get" && options.params.id == false) {
      return this.contacts.getAll();
    } else if (options.action == "save") {
      var contactoNuevo = options.params.id;
      this.contacts.addOne(contactoNuevo);
      this.contacts.save();
      return "Contacto salvado";
    }
  }
}
export { ContactsController };
