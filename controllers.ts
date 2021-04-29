import { ContactsCollection,Contact} from "./models";

export class ContactsControllerOptions {
  action: "get" | "save"|"getName";
  params: Contact;
}
//- dentro del módulo **controllers.ts** crear la clase **ContactsController**
//
//- su constructor debe:
// - instanciar **ContactsCollection** y guardarlo en una prop interna
// - invocar al método load (para que se carge la data del archivo **contacts.json**)
// - debe tener un método **processOptions** que reciba como parámetro un objeto del tipo **ContactsControllerOptions**
// - dependiendo de las propiedades **action** y **params** debe interactuar con el modelo (ContactsController) e invocar distintos métodos
// - en el caso de que el **action** sea "get" y el objeto **params** tenga un id, debe devolver un contacto en particular, si **id** no existe significa que debe devolver todos los contactos
// - en el caso de que **action** sea "save" **params** es lo que se debe usar como contacto nuevo




class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts =new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    var resultado;
    if(options.action== "get"&& options.params.id){
      resultado =this.contacts.getOneById(options.params.id)
    }else if (options.action =="get"){
      resultado =this.contacts.getAll();
    }else if(options.action =="getName"&& options.params.name){
      resultado =this.contacts.getOneByName(options.params.name)
    }
    else if(options.action=="save"&&options.params){
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultado;
  }
}
export { ContactsController };
