import { ContactsCollection } from "./models";



const contacts = [];

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {

    const { action, params } = options;

    if (action === "get") {
      if (params && params.id) {
        return this.contacts.getOneById(params.id);
        
      }else{
        return this.contacts.getAll();
      }
      
    }else if (action === "save") {
      this.contacts.addOne(params);
      this.contacts.save();
    }
  }
}




export { ContactsController };
