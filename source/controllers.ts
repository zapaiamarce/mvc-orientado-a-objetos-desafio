import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection = new ContactsCollection();

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      if (options.params && options.params.id) {
        return this.contacts.getOneById(Number(options.params.id));
      } else {
        const allContacts = this.contacts.getAll();
        return Array.isArray(allContacts) ? allContacts : []; // Asegúrate de que sea un array
      }
    } else if (options.action === "save") {
      const newContact = options.params;
      this.contacts.addOne(newContact);
      return { message: "Contact saved successfully" };
    } else {
      return { message: "No action taken" };
    }
  }
}

export { ContactsController };
