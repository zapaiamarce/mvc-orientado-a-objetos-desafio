import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController { // Creamos la clase ContactsController
  contacts: ContactsCollection; // Declaramos la propiedad ContactsCollection
  constructor() { // Definimos el constructor que 
    this.contacts = new ContactsCollection(); // Inicializa la instancia
    this.contacts.load(); // Y usamos el metodo load para que cargue la data del archivo en el modelo
  }

  processOptions(options: ContactsControllerOptions) { // Definimos el metodo processOptions que obtiene un objeto del tipo ContactsControllerOptions
    if(options.action === "get"){ // Si el action de options es igual a "get"
      if (options.params && options.params.id){ // Si options.params y options.params.id son un truthy
        return this.contacts.getOneById(options.params.id); // Retorna el metodo getOneById() con options.params.id como parametro
      } else {
        return this.contacts.getAll(); // En caso que alguna condicion no se cumpla, retorna el metodo getAll()
      }

    } else if (options.action === "save") { // Por otro lado, si el action de options es igual a "save"
      this.contacts.addOne(options.params); // Agrega el options.params con el metodo addOne
      this.contacts.save() // Y guarda el JSON
      return { message: "Contacto guardado" }; // Por ultimo, retorna un objeto con un mensaje

    } else { // En caso que action sea otra cosa
      return { message: "Acción no reconocida" }; // Retornamos un objeto con un mensaje
    }
  }
}

export { ContactsController };