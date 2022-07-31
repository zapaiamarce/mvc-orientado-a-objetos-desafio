import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
	action?: "get" | "save" | null;
	params: any;
};

class ContactsController {
	contacts: ContactsCollection;
	constructor() {
		this.contacts = new ContactsCollection;
		this.contacts.load();
	}
	processOptions(options: ContactsControllerOptions) {
		// si action es get...
		if (options.action === "get") {
			// si params tiene id, devuelvo un contacto (o todos, si no existe el id)
			// chequeo si el objeto params viene vacío
				if (options.params != null) {
				return this.contacts.getOneById(options.params.id);				
			// si params viene vacío, devuelvo todos los contactos
			} else return this.contacts.getAll();
		}
		
		// si action es save, params es lo que uso como nuevo contacto...
		if (options.action === "save") {
			this.contacts.addOne(options.params);
			this.contacts.save();
		}
	}
}
export { ContactsController };
