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
    const laOpcionEsGet = options.action == "get";
    const laOpcionEsSave = options.action == "save";
    const parametroConNumero = typeof options.params == "number";
    const parametroConObj = typeof options.params == "object";
    
    if (laOpcionEsGet && parametroConNumero ){
      return this.contacts.getOneById(options.params);
    }else if(laOpcionEsGet){
      return this.contacts.getAll();
    }

    if(laOpcionEsSave && parametroConObj){
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };
