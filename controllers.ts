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
  }
}

const contact = new ContactsController();
var params = new ContactsControllerOptions();
params.action = 'get';
params.params = 1;

export { ContactsController };
