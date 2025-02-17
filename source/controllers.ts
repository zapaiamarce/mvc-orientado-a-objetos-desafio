import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection; // Solo declaramos el tipo

  constructor() {
    this.contacts = new ContactsCollection(); // Creamos una nueva instancia aquí
  }

  processOptions(options: ContactsControllerOptions) {
    const { action, params } = options;

    if (action === "get") {
      if (params.id) {
        const contact = this.contacts.getOneById(params.id);
        if (contact) {
          return contact;
        } else {
          return { message: "Contacto no encontrado" };
        }
      } else {
        return this.contacts.getAll();
      }
    } else if (action === "save") {
      const newContact = params; // Asumimos que params contiene el nuevo contacto
      this.contacts.addOne(newContact); // Agregamos el nuevo contacto
      this.contacts.save(); // Guardamos los cambios en el archivo
      return { message: "Contacto guardado exitosamente" }; // Mensaje de éxito
    }

    // Manejo de acciones no reconocidas
    return { message: "Acción no reconocida" }; // Mensaje por defecto
  }

  load() {
    this.contacts.load();
  }
}

export { ContactsController };
