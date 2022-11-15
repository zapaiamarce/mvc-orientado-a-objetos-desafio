import { ContactsCollection, Contact } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: Contact;
};

class ContactsController {
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  
  contacts: ContactsCollection;

  processOptions(options: ContactsControllerOptions) {
    switch(options.action){
      case "get":
        return (options.params.id) ?  this.contacts.getOneById(options.params.id) : this.contacts.getAll();
        break;
      case "save":
        return (options.params) ?  (this.contacts.addOne(options.params), this.contacts.save()) : 
        ()=> {throw new Error('Se debe proporcionar objeto donde guardar el contacto')};
      break;
      case null:
        throw new Error('No se determino una acción a realizar')
      break;
      }
  }
}

export { ContactsController };
