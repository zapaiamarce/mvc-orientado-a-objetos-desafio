import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection()
    this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    let outPut 
    if (options.action == "get" && options.params.id) {
      outPut = this.contacts.getOneById(options.params.id)
    } if (options.action == "get" && !options.params.id) {
      outPut =  this.contacts.getAll()
    } if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params)
      this.contacts.save()
      console.log("Se ha guardado el contacto en la lista de contactos")
    }
  return outPut
  }

}

export { ContactsController };
