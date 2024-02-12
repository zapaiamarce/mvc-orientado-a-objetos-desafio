import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();

  };

  processOptions(options: ContactsControllerOptions): any {
    if(options.action === 'get' && typeof options.params === 'number') {
      return this.contacts.getOneById(options.params);
    }else if(options.action === 'get' && options.params === null) {
      return this.contacts.getAll()
    }else if(options.action === 'save') {
      this.contacts.save();
      return console.log('Guardado');
    };
  };
};

export { ContactsController };
