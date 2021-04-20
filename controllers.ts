import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const newContactCollection = new ContactsCollection();
    this.contacts = newContactCollection;
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    }
    if (options.action === "get") {
      return this.contacts.getAll();
    }
    if (options.action === "save" && options.params) {
      console.log(options);
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };
