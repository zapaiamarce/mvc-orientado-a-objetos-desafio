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
		const contactsId = this.contacts['data'].map((item) => item['id']);
		if (options['action'] == 'get' && contactsId.includes(options['params'])) {
			console.log(`El contacto con id ${options['params']} es el siguiente:`);
			return this.contacts.getOneById(options['params']);
		} else if (options['action'] == 'get') {
			console.log(`No existen contactos con el id ${options['params']}, estos son los contactos:`);
			return this.contacts.getAll();
		} else if (options['action'] == 'save' && options['params']) {
			this.contacts.addOne(options['params']);
			this.contacts.save();
			return this.contacts.getAll();
		}
	}
}

export { ContactsController };
