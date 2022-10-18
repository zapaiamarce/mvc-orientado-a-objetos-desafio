import { ContactsCollection } from "./models";
import * as lodash from "lodash";

export type ContactsControllerOptions = {
	action?: "get" | "save" | null;
	params: any;
};

class ContactsController{
	// contacts: ContactsCollection;
	coleccionDeContacts = new ContactsCollection();
	constructor() {
		this.coleccionDeContacts.load();
	}
	processOptions(options: ContactsControllerOptions) {
		switch (options.action) {
			case "get":
				const pEncontrado = lodash.find(this.coleccionDeContacts.contactsList, (p)=> p.id ===options.params.id);
				if(this.coleccionDeContacts.contactsList.includes(pEncontrado)){
					return pEncontrado;
				} else {
					return this.coleccionDeContacts.getAll();
				}
				break;
		
			case "save":
				this.coleccionDeContacts.addOne(options.params);
				this.coleccionDeContacts.save();
				break;
		}
	}
}
export { ContactsController };


// //******************** 
// const controller1 = new ContactsController();
// console.log(controller1.processOptions({action: "get", params: {id: 2}}));
