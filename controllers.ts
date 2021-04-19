import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any; //es un objeto que entra por la terminal, por lo tanto no se puede ti[ar]
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection
    this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    
    var resultado
    
    if(options.action == "get" && options.params.id){
      const idABuscar: number = options.params.id
      
      resultado = this.contacts.getOneById(idABuscar)
      
    } else if (options.action == "get"){
      
      resultado = this.contacts.getAll()
    }
    if(options.action == "save" && options.params ) { // && me pasaron algo
      this.contacts.addOne(options.params)
      this.contacts.save()
    }
    return resultado
  }
}
export { ContactsController };