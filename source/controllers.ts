import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor(contacts: ContactsCollection) {
    this.contacts = contacts;
    contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    }

    if (options.action == "get") {
      return this.contacts.getAll();
    }

    if (options.action == "save") {
      return this.contacts.addOne(options.params);
    }
  }
}

export { ContactsController };
