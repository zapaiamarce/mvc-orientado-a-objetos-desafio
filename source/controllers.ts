import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};
//Dentro del módulo controllers.ts crear la clase ContactsController
//su constructor debe:
//instanciar ContactsCollection y guardarlo en una propiedad interna
//invocar al método load (para que se carge la data del archivo contacts.json)

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  //tener un método processOptions que reciba como parámetro un objeto del tipo ContactsControllerOptions
  processOptions(options: ContactsControllerOptions) {
    //dependiendo de las propiedades action 
    // y params debe interactuar con el modelo (ContactsController) e invocar distintos métodos
    var resultado;
    if(options.action == "get" && options.params.id){
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get"){
      resultado = this.contacts.getAll();
    } else if (options.action == "save" && options.params){
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultado;
  }
}

export { ContactsController };