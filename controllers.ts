/*

Dentro del módulo controllers.ts crear la clase ContactsController

    su constructor debe:
        instanciar ContactsCollection y guardarlo en una prop interna
        invocar al método load (para que se carge la data del archivo contacts.json)
    la clase debe:
        tener un método processOptions que reciba como parámetro un objeto del tipo ContactsControllerOptions
        dependiendo de las propiedades action y params debe interactuar con el modelo (ContactsController) 
        e invocar distintos métodos en el caso de que el action sea "get" y el objeto params tenga un id, debe
         devolver un contacto en particular, si id no existe significa que debe devolver todos los contactos en el
          caso de que action sea "save" params es lo que se debe usar como contacto nuevo

*/


import { Contact, ContactsCollection } from "./models";

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
    //console.log("Estoy en process option y option.actions es:",options.action)
    //console.log("Estoy en process option y option.params es:",options.params)
    if (options.action == "save") {
      const resultado = new Contact 
      resultado.id = 69;
      resultado.name = options.params
      console.log("esto es save",resultado)
      return this.contacts.addOne(resultado) && this.contacts.save()
    } else {
      const resultado = this.contacts.getOneById(options.params)
      if (typeof resultado != "undefined") {
        return console.log(resultado)
      } else {
        return console.log(this.contacts.getAll())
      }
    }
  }
}

export { ContactsController };