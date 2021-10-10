import { ContactsCollection, Contact } from './models';

export class ContactsControllerOptions {
  action: 'get' | 'save';
  params: Contact;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    // const contactsController = new ContactsCollection();
    // this.contacts = contactsController;
    // contactsController.load();
    // Forma corta
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === 'get' && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action === 'get') {
      return this.contacts.getAll();
    } else if (options.action === 'save' && options.params) {
      this.contacts.addOne(options.params);
      return this.contacts.save();
    }
  }
}
export { ContactsController };
