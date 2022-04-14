import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  
  constructor() {
    this.contacts = new ContactsCollection();

    this.contacts.load();
  };

  processOptions(options: ContactsControllerOptions) : Object[] {
    if(options.action == "get"){
      if(options.params >= 0 && options.params != ""){
        return [this.contacts.getOneById(options.params)];
      }
      return this.contacts.getAll();
    }
    
    this.contacts.addOne(options.params);
    return this.contacts.getAll();
  }
}
export { ContactsController };
