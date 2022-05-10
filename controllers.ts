import { Contact, ContactsCollection } from "./models";
import * as  _ from 'lodash';

export class ContactsControllerOptions {
  action: string;
  params: any;
  constructor(action: string, params: number | Contact){
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
  processOptions(options: ContactsControllerOptions){
    const optionAction = options.action;
    const optionParams = options.params;

    if(optionAction === "get" && optionParams != isNaN){
      // const idFound = this.contacts.data.includes(optionParams);
      // To Do, validar que el ID existe o no y retornar la respeusta.

      const lista = this.contacts.data;
      const contactFinded = _.find(lista, {"id": optionParams})

      if(contactFinded != undefined){
        return contactFinded
      }else{
        return this.contacts.getAll();
      }
    }else{
      if(optionAction == "save" && optionParams){
        // JSON.parse(optionParams);
        this.contacts.addOne(optionParams);
        this.contacts.save();
        
        // console.log("Se uso SAVE")
      }  
    }

    
    // return null
  };
}
export { ContactsController };
