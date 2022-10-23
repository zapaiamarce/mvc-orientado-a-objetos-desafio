import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
	action?: "get" | "save" | null;
	params: any;
};



class ContactsController {
	contacts: ContactsCollection;
	
	constructor() {
		this.contacts = new ContactsCollection()
  		this.contacts.load();
	}

	processOptions(options: ContactsControllerOptions) {
		if (options.action == "get" && options.params.id) {
			const contacto = this.contacts.getOneById(options.params.id)
			return contacto;
		}
		if (options.action == "get" && !options.params) {
			return this.contacts;
		}
		if (options.action == "save") {
			return this.contacts.addOne(options.params);
		}
	}
}


export { ContactsController };
