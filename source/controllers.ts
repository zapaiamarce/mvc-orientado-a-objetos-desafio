import { ContactsCollection } from "./models";

type ContactsControllerOptions = {
   action?: "get" | "save" | null;
   params: any;
};

class ContactsController {
   contacts: ContactsCollection;

   constructor() {
     let objeto: ContactsCollection = new ContactsCollection();
     objeto.load();
     this.contacts =  objeto }

   processOptions(opciones: ContactsControllerOptions) {
     if (opciones.action == 'get') {
       let resultado = this.contacts.getOneById(opciones.params);
       if (resultado == null) {
         resultado = this.contacts.getAll() };
       return resultado }

     else if (opciones.action == 'save') {
       let contacto: {nombre: string, id: number} = { 
         nombre: opciones.params.nombre,
         id: opciones.params.id };
       this.contacts.addOne(contacto) }
   }
}

export { ContactsController, ContactsControllerOptions };