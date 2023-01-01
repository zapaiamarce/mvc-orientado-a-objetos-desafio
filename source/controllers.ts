import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts;
  constructor() {
    const contactsList = new ContactsCollection();
    contactsList.load();
    this.contacts = contactsList;
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id != null) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action == "get" && options.params.id == null) {
      return this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}

export { ContactsController };
