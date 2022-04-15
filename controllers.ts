import { ContactsCollection } from "./models";
import { Contact } from "./models"

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params != undefined){
      return this.contacts.getOneById(options.params.id);
    }
    else if (options.action == "get" && options.params == undefined){
      return this.contacts.getAll();
    }
    else if (options.action == "save"){
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };