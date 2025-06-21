import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params?: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      if (options.params?.id) {
        return this.contacts.getOneById(options.params.id);
      } else {
        return this.contacts.getAll();
      }
    } else if (options.action === "save") {
      if (options.params?.id && options.params?.name) {
        this.contacts.addOne(options.params);
        this.contacts.save();
        return;
      } else {
        throw new Error("Faltan datos para guardar el contacto.");
      }
    }
    return null; // Para manejar otros casos
  }
}

export { ContactsController };
