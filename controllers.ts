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
    const action = options.action;
    const parameter = options.params;
    if (action == "get") {
      if (typeof parameter == "number") {
        return this.contacts.getOneById(parameter);
      } else {
        return this.contacts.getAll();
      }
    }
    if (action == "save") {
      this.contacts.addOne(parameter);
      this.contacts.save();
    }
  }
}
export { ContactsController };
