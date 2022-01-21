import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  //ready to go
  processOptions(options: ContactsControllerOptions) {
    //hecho
    if (options.action == "get" && options.params.id) {
      const getForId = this.contacts.getOneById(options.params.id);
      if (getForId == undefined) {
        console.log(
          "No existe un contacto con ese id, por ende le retornaremos todos los contactos"
        );
        return this.contacts.getAll();
      } else {
        return getForId;
      }
    }
    if (options.action == "save" && options.params.id && options.params.name) {
      //Corregir esta funcion y hacer que funcione(?)
      this.contacts.addOne(options.params);
      this.contacts.save();
      return this.contacts.getOneById(options.params.id);
    } else if (options.action == "save") {
      console.log(
        "Para que proccesOptions(---) funcione, necesitas asignarle a params las propiedades {id: 'número', name: 'nombreQueQuieroAsignar'}"
      );
    }
  }
}
export { ContactsController };
