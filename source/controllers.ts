import { ContactsCollection, Contact } from "./models";


export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  public processOptions(options: ContactsControllerOptions) {
    if (options.params.id !== Number) {
      return this.contacts.getAll();
    } else if (options.action === "get" && options.params.id === Number) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action === "save" && options.params) {
      return this.contacts.addOne(options.params);
    }
    return null;
  }
  
}

export { ContactsController };

