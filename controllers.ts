import { ContactsCollection } from './models';

export class ContactsControllerOptions {
  action: 'get' | 'save';
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    var action = options.action;
    var params = options.params;

    if (action == 'get' && options.params) {
      return this.contacts.getOneById(params);
    } else if (action == 'save') {
      return this.contacts.addOne(params);
    } else return this.contacts.getAll();
  }
}

export { ContactsController };
