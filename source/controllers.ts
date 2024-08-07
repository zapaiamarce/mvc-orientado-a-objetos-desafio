import { ContactsCollection, Contact } from "./models";

// controllers.ts
export type ContactsControllerOptions = {
  action?: 'get' | 'save' | 'load' | 'add' | 'getById' | null;
  params: any;
};


class ContactsController {
  contacts: ContactsCollection = new ContactsCollection();
  constructor() {}
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      return this.contacts.getAll();
    }else if (options.action === "save") {
      this.contacts.save();
    }
  }
  load () {
    this.contacts.load();
  }
  addOne(contact: Contact) {
    this.contacts.addOne(contact);
  }
  getOneById(id: string) {
    return this.contacts.getOneById(parseInt(id));
}
}

export { ContactsController };
