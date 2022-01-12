import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() 
  {
    const controller = new ContactsCollection;
    this.contacts = controller;
    controller.load();
    
  }
  processOptions(options: ContactsControllerOptions) {
    var resultado;
    if (options.action == "get" && options.params.id) {
      resultado = this.contacts.getOneId(options.params.id);
    }
    else if (options.action == "get") {
      resultado = this.contacts.getAll;
    }
    else if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultado;
  }
}

export { ContactsController };
