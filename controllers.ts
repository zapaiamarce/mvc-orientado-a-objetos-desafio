import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {

  contacts: ContactsCollection;

  constructor() {
    // instanciar ContactsCollection y guardarlo en una prop interna
    this.contacts = new ContactsCollection();

    // invocar al método load
    //(para que se carge la data del archivo contacts.json)
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    //dependiendo de las propiedades action y params debe interactuar con
    //el modelo (ContactsController) e invocar distintos métodos

    //en el caso de que el action sea "get" y el objeto params tenga un id,
    //debe devolver un contacto en particular

    if(options.action == "get" && options.params.id) {
     return this.contacts.getOneById(options.params.id);
    };

    //si id no existe significa que debe devolver todos los contactos

    if(options.action == "get"){
      return this.contacts.getAll();
    };

    //en el caso de que action sea "save" params
    //es lo que se debe usar como contacto nuevo

    if(options.action == "save") {
      this.contacts.addOne(options.params)
    }

  }
}


export { ContactsController };
