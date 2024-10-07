import { ContactsCollection,Contact } from "./models";

export type ContactsControllerOptions = {
  action: "get" | "save" | null;
  params: Contact;
};

class ContactsController {
  contacts: ContactsCollection ;
  constructor() {
    this.contacts = new ContactsCollection()
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    let resultado ;
    if(options.action == "get" && options.params.id ){
      console.log(options)
      resultado = this.contacts.getOneById(options.params.id);
    }else if (options.action == "get"){
      // console.log(options)
      resultado = this.contacts.getAll();
    }else if (options.action == "save" && options.params){
       this.contacts.addOne(options.params);
      this.contacts.save();
      resultado = { success: true, savedContact: options.params };
    }
    return resultado
  }
}

export { ContactsController };
