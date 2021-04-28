import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
    action: "get" | "save";
    params: any;
}

class ContactsController {
    contacts: ContactsCollection;

    // Método constructor
    constructor() {
        this.contacts = new ContactsCollection();
        this.contacts.load();
    }

    // Método
    processOptions(options: ContactsControllerOptions) {
        // Variables auxiliares para prolijidad
        let accion = options.action;
        let parametros = options.params;
        let resultado;

        // Si hay un get y un id...
        if (accion == "get" && parametros.id) {
            resultado = this.contacts.getOneById(parametros.id);
        }

        // Si hay get pero no id...
        else if (accion == "get") {
            resultado = this.contacts.getAll();
        }

        // Si se pide guardar los contactos...
        else if (accion == "save") {
            this.contacts.addOne(parametros);
            this.contacts.save();

            resultado = "> Contacto guardado!";
        }

        return resultado;
    }
}

export { ContactsController };
