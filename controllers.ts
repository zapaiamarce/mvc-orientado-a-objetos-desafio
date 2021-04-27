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
    var resultado;
    if(options.action == "get" && options.params.id){
      resultado = options.params.id;
    }else if(options.action == "get"){
      resultado = this.contacts.getAll();
    }else if(options.action == "save" && options.params){
      resultado = this.contacts.addOne(options.params);
    };
  };
};
export { ContactsController };
