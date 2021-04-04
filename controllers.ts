import { ContactsCollection } from "./models";
import * as _ from "lodash"

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
   this.contacts = new ContactsCollection
   this.contacts.load()
}

  processOptions(options: ContactsControllerOptions) {
  
  const optionsController = options
  const arrayData = this.contacts.getAll()
  const idDeLosContactos = arrayData.map(c => {return c.id})

  // condiciones
  let esGet = optionsController.action == "get";
  let existeElID = _.includes(idDeLosContactos,optionsController.params)


  if (esGet && existeElID){
    return arrayData.find(c => {return c.id == optionsController.params})
  }
  
  if (esGet && existeElID == false) {
    return arrayData
  }
  
  
  if(optionsController.action == "save") {
    console.log("es save")
  }

  }
}
export { ContactsController };

