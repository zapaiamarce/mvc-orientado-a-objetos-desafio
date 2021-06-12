import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    // instanciar ContactsCollection y guardarlo en una prop interna
    this.contacts = new ContactsCollection();
    //invocar al método load (para que se carge la data del archivo contacts.json)
    this.contacts.load();
  }
  //método processOptions que reciba como parámetro un objeto del tipo ContactsControllerOptions
  processOptions(options: ContactsControllerOptions) {

    if(options.action == "get"){
      if(options.params.id){
        return this.contacts.getOneById(options.params.id);
      } else {
        return this.contacts.getAll();
      }
    } else if(options.action == "save"){
      this.contacts.addOne(options.params);
      this.contacts.save();
      return "Guardado"
    }

  }
} 

export { ContactsController };
