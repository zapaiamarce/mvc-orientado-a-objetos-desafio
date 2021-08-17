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
  }
  processOptions(options: ContactsControllerOptions) {
    if(options.action == "get" && options.params.id){
return this.contacts.getOneById(options.params.id);}
    else if(options.action == "get"){
return this.contacts.getAll();}
else if(options.action == "save"){
  this.contacts.addOne(options.params);
  return this.contacts.save();
}

  }
}
export { ContactsController };
