import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  private contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action === "get" && !options.params.id) {
      return this.contacts.getAll();
    }
    if (options.action === "save") {
      this.contacts.addOne(options.params);
      return this.contacts.save();
    }
    return null;
  }
}
export { ContactsController };
