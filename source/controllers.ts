import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

export class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contactCollection = new ContactsCollection();
    this.contacts = contactCollection;
    contactCollection.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && typeof options.params === "number") {
      console.log("Loading the contact with the required ID");
      const contact = this.contacts.getOneById(options.params);
      console.log(contact);
    } else if (options.action === "get") {
      console.log("Fetching all contacts");
      const allContacts = this.contacts.getAll();
      console.log(allContacts);
    } else if (options.action === "save") {
      console.log("Saving contacts");
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
