import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection = new ContactsCollection();
  constructor() {
    this.contacts.load();
  }

  public processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && options.params.id) {
      const contact = this.contacts.getOneById(options.params.id);
      return contact;
    } else if (options.action === "get") {
      return this.contacts.getAll();
    } else if (options.action === "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return true;
    }
    return null;
  }
}

export { ContactsController };
