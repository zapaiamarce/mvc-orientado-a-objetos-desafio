import { ContactsCollection } from './models';

class ContactsControllerOptions {
  action: 'get' | 'save';
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    const contacts = new ContactsCollection();
    contacts.load();
    this.contacts = contacts;
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action == 'get' && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action == 'get') {
      return this.contacts.getAll();
    } else if (options.action == 'save' && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return 'Contacto Guardado';
    }
  }
}

export { ContactsController, ContactsControllerOptions };
