import { ContactsCollection } from "./models";

class ContactsControllerOptions {
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
    const contactsIds = this.contacts.data.map((item) => item.id);
    if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return this.contacts.getAll();
    } else if (
      options.action == "get" &&
      contactsIds.includes(options.params)
    ) {
      return this.contacts.getOneById(options.params);
    } else {
      return this.contacts.getAll();
    }
  }
}

export { ContactsController, ContactsControllerOptions };
