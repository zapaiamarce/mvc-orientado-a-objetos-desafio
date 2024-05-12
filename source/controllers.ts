import { ContactsCollection } from "./models";

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
    var res;
    if(options.action == "get" && options.params.id){
      res = this.contacts.getOneById(options.params.id);
    }
    else if(options.action == "get"){
      res = this.contacts.getAll();
    }
    else if(options.action == "save" && options.params){
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return res;
  }
}


export { ContactsController };
