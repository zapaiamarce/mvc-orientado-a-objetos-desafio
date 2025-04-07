import { ContactsCollection } from './models';

export type ContactsControllerOptions = {
  action?: 'get' | 'save' | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === 'get') {
      if (options.params.id) {
        return this.contacts.getOneById(options.params.id);
      } else {
        return this.contacts.getAll();
      }
    } else if (options.action === 'save' && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return `${options.params.name} ha sido agregado exitosamente ✅`;
    }

    return null;
  }
}

export { ContactsController };
