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
    if (options.action == "get" && options.params.id) {
      const id = options.params.id;
      return this.contacts.getOneById(id);
    } else if (options.action == "get" && !options.params.id) {
      return this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      const nuevoContacto = options.params;
      this.contacts.addOne(nuevoContacto);
      this.contacts.save();
    }
  }
}

export { ContactsController, ContactsControllerOptions };
