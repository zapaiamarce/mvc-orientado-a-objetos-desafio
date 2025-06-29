/*import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection = {};
  constructor() {}
  processOptions(options: ContactsControllerOptions) {}
}

export { ContactsController };*/
// Importamos el modelo que creamos en models.ts
import { ContactsCollection, Contact } from "./models";

// Definimos el tipo que tendrá el objeto de opciones
export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

// Clase que sirve de intermediario entre el modelo y el index.ts
class ContactsController {
  // Propiedad interna que representa el modelo
  contacts: ContactsCollection;

  // Constructor: crea una instancia del modelo y carga los datos
  constructor() {
    this.contacts = new ContactsCollection(); // Crea el modelo
    this.contacts.load(); // Carga los datos del archivo JSON
  }

  // Método que decide qué hacer dependiendo de la opción que se reciba
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get") {
      // Si se pide un ID, busca ese contacto
      if (options.params && options.params.id) {
        return this.contacts.getOneById(options.params.id);
      } else {
        // Si no hay ID, devuelve todos los contactos
        return this.contacts.getAll();
      }
    } else if (options.action === "save") {
      // Si la acción es guardar, agregamos el nuevo contacto
      this.contacts.addOne(options.params); // Agrega a la lista
      this.contacts.save(); // Guarda en el archivo
    }
  }
}

// Exportamos la clase para que pueda ser usada en index.ts
export { ContactsController };

