import { Contact, ContactsCollection } from "./models";

export class ContactsControllerOptions {
	action: "get" | "save";
	params: any;
}


class ContactsController {
  contacts: ContactsCollection;
  
  constructor() {
		this.contacts = new ContactsCollection();
    //instanciado y guardado
    this.contacts.load()
  }


	
  processOptions(options: ContactsControllerOptions) {} 


}

export { Contact, ContactsController };
