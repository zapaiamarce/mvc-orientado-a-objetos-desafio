import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection()
    this.contacts.load()

  }

  processOptions(options: ContactsControllerOptions) {

    if ((options.action === "get" || options.action === null) && (typeof options.params.id === "number")){
       return this.contacts.getOneById(options.params.id)
    }


    if (options.action === 'get' && typeof options.params.id === 'undefined') {
       return this.contacts.getAll()
    }


    if(options.action === "save"){
      const parametros =  options.params
      this.contacts.addOne(parametros)
      this.contacts.save()
      return this.contacts.getAll()
    }
    throw new Error("Acción no válida o parámetros incorrectos");

   }
}

export { ContactsController };

 