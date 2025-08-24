import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    switch (options.action) {
      case "get":
        if (this.contacts.data.find((x) => x.id == options.params.id)) {
          return this.contacts.getOneById(options.params.id);
        } else {
          return this.contacts.getAll();
        }
      case "save":
        this.contacts.addOne(options.params);
        this.contacts.save();
        return "Contacto agregado"; // Devolviendo un mensaje
      case null:
        return "Acción no válida"; // Devolviendo un mensaje
      default:
        return "Acción no válida"; // Para manejar cualquier otro caso
    }
  }
}

export { ContactsController };
