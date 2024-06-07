import { ContactsCollection, Contact } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection; // propiedad interna

  constructor() {
    this.contacts = new ContactsCollection(); // instanciar nueva ContactsCollection
    this.contacts.load(); // invocar metodo para leer datos de json
  }
  processOptions(options: ContactsControllerOptions): any {
    let resultado; // guardo resultado
    
    if (options.action == "get" && options.params && options.params.id) {
      // get y id
      resultado = this.contacts.getOneById(options.params.id); // devuelve un contacto en particular
    } else if (options.action == "get") {
      // si el id no existe
      resultado = this.contacts.getAll(); // devuelve todos los contactos
    } else if (options.action == "save" && options.params) {
      // contacto nuevo
      this.contacts.addOne(options.params); // agrega contacto
      this.contacts.save(); // guardar en el array ContactsCollection
      resultado = true; // devuelve verdadero cuando se llama con la acción "save"
    }

    return resultado;
  }
}

export { ContactsController };
