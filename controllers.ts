import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contacts = new ContactsCollection();
    contacts.load();
    this.contacts = contacts;
  }
  imprimir() {
    console.log(this.contacts);
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get") {
      if (options.params) {
        return this.contacts.getOneById(options.params);
      } else {
        return this.contacts.getAll();
      }
    }
    if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };
