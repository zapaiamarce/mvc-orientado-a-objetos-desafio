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
    processOptions(parametro: ContactsControllerOptions) {
        if (parametro.action == 'get' && typeof parametro.params == 'number') {
            return this.contactById(parametro);
        } else {
            this.addContact(parametro);
        }
    }
    contactById(obj) {
        const contact = this.contacts.getOneById(obj.params);
        if (typeof contact != 'undefined') {
            return contact;
        } else {
            return this.contacts.getAll();
        }
    }
    addContact(parametro) {
        this.contacts.addOne(parametro);
    }
}

export { ContactsController };
