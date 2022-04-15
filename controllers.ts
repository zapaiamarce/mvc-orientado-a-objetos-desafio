import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
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
    if (
      options.action == "get" &&
      typeof options.params == "number" &&
      options.params
    ) {
      return this.contacts.getOneById(options.params);
    }

    if (options.action == "get" && !options.params) {
      return this.contacts.getAll();
    }

    if (options.action == "save") {
      return this.contacts.addOne(options.params);
    }
  }
}
export { ContactsController };
