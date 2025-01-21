import { ContactsCollection } from "./models";
import data from "./contacts.json";

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

    // En este caso cada camino debe retornar algo de forma explicita y se debe usar el else de forma obligatoria
    // Caso contrario nos dara el error "Not all code paths return a value."
    processOptions(options: ContactsControllerOptions) {
        if (options.action === "save") {
            this.contacts.addOne(options.params);
            return "Contacto guardado";
        } else if (options.action === "get") {
            if (typeof options.params === "number") {
                const retVal = this.contacts.getOneById(options.params);
                return retVal;
            }
            return this.contacts.getAll();
        } else {
            return "No hay una accion valida";
        }
    }
}

const tes = new ContactsController();

console.log(tes);
export { ContactsController };
