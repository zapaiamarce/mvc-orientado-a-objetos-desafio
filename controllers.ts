import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts =  new ContactsCollection
    this.contacts.load()
  }
  processOptions(option: ContactsControllerOptions) {
    var esId = Number.isInteger(option.params)
    if(option.action === "get" &&  esId){
      
      return  this.contacts.getOneById(option.params)
      
    }
    else if(option.action === "get"){
      return this.contacts.getAll()
    }
    else if(option.action === "save"){
      this.contacts.addOne(option.params)
      this.contacts.save()
    }
  }

  
}
export { ContactsController };
