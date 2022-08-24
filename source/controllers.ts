import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
	action?: "get" | "save" | null;
	params: any;
};

class ContactsController {
	contacts: ContactsCollection;
	constructor(contacCollection : ContactsCollection) {
		this.contacts = contacCollection
		this.contacts.load()
	}
	processOptions(options: ContactsControllerOptions) {
		if(options.action === "get" && options.params){
			let busqueda = this.contacts.getOneById(options.params)
			if(busqueda){
				return busqueda
			}else{
				return this.contacts.getAll()
			}
		}
		if(options.action === "save"){
			this.contacts.addOne(options.params)
			this.contacts.save()
		}
	}
}

export { ContactsController };
