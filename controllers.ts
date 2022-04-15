import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const objeto = new ContactsCollection();
    this.contacts = objeto;
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      return this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };
