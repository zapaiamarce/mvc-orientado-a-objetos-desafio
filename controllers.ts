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
    if (options.action === "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action === "get") {
      return this.contacts.getAll();
    }

    if (options.action === "save" && options.params) {
      this.contacts.addOne(options.params);
      return this.contacts.save();
    }
  }
}
export { ContactsController, ContactsControllerOptions };
