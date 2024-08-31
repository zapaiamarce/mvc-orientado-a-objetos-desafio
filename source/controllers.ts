import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection  //= {}; OJO EL MODELO ORIGINAL TIENE ESE TIPO AHÍ.. SI ES ASÍ HAY QUE DARLE VALORES DE INICIO
  constructor(contactsColletction : ContactsCollection) {
  this.contacts = contactsColletction 
  this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && typeof options.params === "number") {
    return this.contacts.getOneById(options.params)
    } else if (typeof options.params !== "number") { 
     return this.contacts.getAll()
    } else if (options.action == "save" && typeof options.params =="object") { //NO SÉ QUE ONDA ESTO, PORQUE EL OBJETO DEBERÍA CUMPLIRO CON LAS OPCIONES DEL OBJETO DE OPCIONES DE HOYO ESE
      this.contacts.addOne(options.params)
    }
    return 
  }
}

export { ContactsController };
