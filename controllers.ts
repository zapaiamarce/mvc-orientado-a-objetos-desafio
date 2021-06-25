import { Contact, ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: Contact;
}

class ContactsController {
contacts: ContactsCollection;
  constructor() {
  this.contacts = new ContactsCollection();
  this.contacts.load();
  }
processOptions(options: ContactsControllerOptions){
  var resultado;
if(options.action =="get" && options.params.id){
  return resultado = this.contacts.getOneById(options.params.id);
} else if(options.action == "get"){
  return resultado =this.contacts.getAll();
} else if(options.action == "save" && options.params){
  this.contacts.addOne(options.params);
 this.contacts.save()
}
return resultado;
 }
}

export { ContactsController };
