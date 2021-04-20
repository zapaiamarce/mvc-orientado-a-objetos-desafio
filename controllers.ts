
import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contacts = new ContactsCollection()
    contacts.load()
    this.contacts = contacts
  }
  //invoca las funciones de models.ts dependiendo los valores de options
  //si options.action == "get" => devuelve un contacto segun el id en options.params
    // si options.params no tiene id, devuelve todos los contactos
  //si options.action == "save" agrega como un contacto nuevo los valores de options.params
  processOptions(options: ContactsControllerOptions) {
    switch (options.action) {
      case "get":
        if (options.params.id) {
          return this.contacts.getOneById(options.params.id)
        }
        else{
          return this.contacts.getAll()
        }
        
        case "save":
         this.contacts.addOne(options.params)
         this.contacts.save()
         return "contacto agregado"
    
      default: return "opcion invalida"
        
    }
  }
}



export { ContactsController };
