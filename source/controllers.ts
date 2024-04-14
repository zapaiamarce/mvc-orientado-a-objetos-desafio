import { ContactsCollection, Contact } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save";
  params: Contact;
};

class ContactsController {
  contacts: ContactsCollection;
    constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      if (options.params.id) {
        return this.contacts.getOneById(options.params.id); // Utiliza return para devolver el resultado de la función
      } else {
        return this.contacts.getAll(); // Invoca getAll y devuelve el resultado
      }
    }  
    else if (options.action === "save") {
      this.contacts.addOne(options.params); // Invoca addOne y devuelve el resultado
      return this.contacts.save();
    }
  }
}

export { ContactsController };
