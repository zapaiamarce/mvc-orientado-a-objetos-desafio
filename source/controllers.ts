import { ContactsCollection } from './models';

export type ContactsControllerOptions = {
	action?: 'get' | 'save' | null;
	params?: any;
};

export class ContactsController {
	contacts: ContactsCollection; /* = {} */

	constructor() {
		const nuevaColeccionDeContactos = new ContactsCollection();
		this.contacts = nuevaColeccionDeContactos;
		this.contacts.load();
	}

	processOptions(options: ContactsControllerOptions): any {
		if (options.action == 'get' && options.params.id) return this.contacts.getOneById(options.params.id);
		else if (options.action == 'get') return this.contacts.getAll();
		else if (options.action == 'save' && options.params) {
			this.contacts.addOne(options.params);
			this.contacts.save();
		}
	}
}

// export { ContactsController };
