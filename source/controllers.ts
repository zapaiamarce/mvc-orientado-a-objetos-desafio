import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
  }
  async processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      await this.contacts.load();
      console.log(this.contacts.getAll());
    } else if (options.action === "save") {
      await this.contacts.save();
    }
  }
}

export { ContactsController };
