import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
  let collection = new ContactsCollection()
  this.contacts = collection
  this.contacts.load()  
  }
  
  processOptions(options: ContactsControllerOptions) {

  let resultado;
  
  if (options.action == "get" && options.params.id ) { 
   return this.contacts.getOneById(options.params.id)
  }

  if (options.action == "get") {
    return this.contacts.getAll()
  }

  if (options.action == "save") {
    this.contacts.addOne (options.params)
    this.contacts.save()
  }
  
    }
};
export { ContactsController };