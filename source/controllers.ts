import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load(); // Cargar los contactos al iniciar
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && options.params.id) {
      return this.contacts.getOneById(options.params.id);
    } else if (options.action === "get" && !options.params.id) {
      return this.contacts.getAll();
    }
    if (options.action === "save") {
  const newContact = options.params;
  this.contacts.addOne(newContact);
  this.contacts.save();   // solo guarda en archivo
  return newContact;      // devolvemos el contacto agregado
}
    return null;
  }



}

export { ContactsController };