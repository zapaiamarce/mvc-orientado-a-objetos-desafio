import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  collection: any;
  constructor() {
    const contactModel = new ContactsCollection();
    this.collection = contactModel;
    this.contacts = contactModel.load();
    
  }
  processOptions(options: ContactsControllerOptions) {
    var exist: boolean;
    if (this.collection.getOneById(options.params.id) == null || undefined)
      exist = false
    else 
      exist = true;
    if(options.action == "save" && exist == true){  
        return "Already exist with that ID";
    }if(options.action == "save" && exist == false){
        this.collection.addOne(options.params);
        return this.collection.save();
    } else if(options.action == "get" && exist == true){
      return this.collection.getOneById(options.params.id);
    } else if (options.action == "get" && exist == false){
      return this.collection.getAll();
    } 
  }
}
export { ContactsController };
