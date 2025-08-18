import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    // Manejar la carga asíncrona sin bloquear el constructor
    this.contacts.load().catch((error) => {
      console.error("Error al cargar contactos en constructor:", error);
    });
  }

  async processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      if (options.params && options.params.id) {
        // Devolver un contacto específico por ID
        return this.contacts.getOneById(options.params.id);
      } else {
        // Devolver todos los contactos
        return this.contacts.getAll();
      }
    } else if (options.action === "save") {
      // Agregar un nuevo contacto y guardar
      this.contacts.addOne(options.params);
      await this.contacts.save();
      return options.params;
    }
  }
}

export { ContactsController };
