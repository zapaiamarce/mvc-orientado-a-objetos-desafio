import { Contact, ContactsCollection } from './models';

export type ContactsControllerOptions = {
  action?: 'get' | 'save' | null;
  params: Contact;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === 'get' && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action === 'get') {
      return this.contacts.getAll();
    } else if (options.action === 'save') {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return `${options.params.name} ha sido guardado exitosamente✅`;
    }

    return null;
  }
}

export { ContactsController };
