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
    if (options.action === "get") {
      if (options.params && options.params.id) {
        return this.contacts.getOneById(options.params.id);
      }
      return this.contacts.getAll();
    }
    if (options.action === "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return "Contacto guardado";
    }
    throw new Error("Acción no válida");
  }
}

export { ContactsController };
