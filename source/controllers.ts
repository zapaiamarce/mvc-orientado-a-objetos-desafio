import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null; // 'action' es una propiedad opcional que puede ser "get", "save" o null.
  params: any; // 'params' es una propiedad obligatoria que puede ser de cualquier tipo.
};

class ContactsController {
  contacts: ContactsCollection;
  
  constructor() {
    this.contacts =  new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    var resultado;
    if (options.action === null) {
      // Lógica para manejar el caso donde no se realiza ninguna acción, por ahora no hago nada
    } else if (options.action === "get" && options.params.id) {           
        resultado = this.contacts.getOneById(options.params.id)
      } else if (options.action === "get" && !options.params.id){
        resultado =  this.contacts.getAll();    
    } else if (options.action === "save" && options.params) {      
        resultado = this.contacts.addOne(options.params)
        this.contacts.save();
    }
    return resultado;
  }

  
}

export { ContactsController };
