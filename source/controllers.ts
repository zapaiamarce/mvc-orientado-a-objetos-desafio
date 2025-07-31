import { ContactsCollection, Contact } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contactsCollection: ContactsCollection;
  
  constructor() {
    this.contactsCollection = new ContactsCollection();
    this.contactsCollection.load(); // Cargar los contactos}
  }
  processOptions(options: ContactsControllerOptions): Contact | Contact[] | { message: string } | null {
    if (options.action === 'get'){
      if(options.params.id){
        const contact = this.contactsCollection.getOneById(options.params.id);
        return contact || null; //Retorna null si no se encuentra
    };
    return this.contactsCollection.getAll(); //Retorna todos los contactos
  } 
    if(options.action === 'save'){
      this.contactsCollection.addOne(options.params);
      this.contactsCollection.save();
      return { message: 'Contacto guardado'};
    }
    return null; //Retorna null si no coincide ninguna accion
  }
} 
export { ContactsController };
