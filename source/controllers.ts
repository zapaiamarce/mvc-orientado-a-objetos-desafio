import { ContactsCollection, Contact } from "./models";


export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: Contact;
};

class ContactsController {
  contacts: ContactsCollection ;
  constructor() {
    const contact = new ContactsCollection()
    this.contacts = contact
    this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    if(options.action == "get" && options.params.id){
      const resp = this.contacts.getOneById(options.params.id)
      if(resp != undefined){
        return resp
      }else{
        return this.contacts.getAll()
      }
    }else if(options.action == "get"){
      return this.contacts.getAll()
    }else if(options.action == "save" && options.params){
          this.contacts.addOne(options.params)
          this.contacts.save()
          // return this.contacts.getAll()
        // if(validProp(options.params)){
        //   this.contacts.addOne(options.params)
        //   return this.contacts.getAll()}
    }
  }
}

export { ContactsController };
