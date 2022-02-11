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
    switch (options.action) {
      case "get":
        return this.contacts.getOneById(options.params);
      case "save":
        this.contacts.addOne(options.params);
        break;
    }
  }
}
export { ContactsController };
