import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contactos = new ContactsCollection()
    this.contacts = contactos
    contactos.load()
  }
  processOptions(options: ContactsControllerOptions){

    let resp : any

    if(options.action === "get" && options.params.id){
            resp = this.contacts.getOneById(options.params.id)
    }else if(options.action === "save" && options.params.id){

          
                this.contacts.addOne(options.params)
                this.contacts.save()
                     
    }else if(options.action === "get" &&!options.params){
            resp = this.contacts.getAll()
    }

    return resp

  }
}
export { ContactsController };
