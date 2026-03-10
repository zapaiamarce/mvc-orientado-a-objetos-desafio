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
  const { action, params } = options;

  if (action === "get") {
    if (params.id) {
      return this.contacts.getOneById(params.id);
    } else {
      return this.contacts.getAll();
    }
  }

  if (action === "save") {
    return this.contacts.addOne(params);
  }
}
}

export { ContactsController };
