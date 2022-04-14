import { ContactsCollection } from "./models";
import _ from 'lodash';

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
  constructor(action: "get" | "save", params: any){
    this.action = action;
    this.params = params;
  }
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    const optionAction = options.action;
    const optionParams = options.params;

    if(optionAction == "get" && optionParams != isNaN){
      // const idFound = this.contacts.data.includes(optionParams);
      var idFound = true;

      const contactToReturn = idFound ? this.contacts.getOneById(optionParams) : this.contacts.getAll();
      
      return contactToReturn
    }

    if(optionAction == "save"){
      this.contacts.addOne(optionParams);
    }
  };
}
export { ContactsController };
