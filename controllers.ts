import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contactsCollection = new ContactsCollection();
    this.contacts = contactsCollection;
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      return (
        this.contacts.getOneById(options.params.id) || this.contacts.getAll()
      );
    } else if (options.action === "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };
