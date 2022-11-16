import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  contacts: ContactsCollection;

  processOptions(options: ContactsControllerOptions) {
    if(options.action == "get" && options.params.id){
      return this.contacts.getOneById(options.params.id);
    }else if(options.action == "get"){
      return this.contacts.getAll();
    } else if(options.action == "save" && options.params){
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}

export { ContactsController };
