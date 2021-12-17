import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
	action: "get" | "save";
	params: any;
}

class ContactsController {
	contacts: ContactsCollection;
	// Genera una instancia de ContactsCollection y carga la información de contacts.json.
	constructor() {
		this.contacts = new ContactsCollection();
		this.contacts.load();
	}
	// Recibe las opciones con las cuales el controlador va a operar con el modelo.
	processOptions(options: ContactsControllerOptions) {
		// Si la acción es "get" ...
		if (options.action == "get") {
			const paramId: number = options.params;
			const contactoABuscar = this.contacts.getOneById(paramId);
			// Si encuentra un contacto con el id pasado como argumento...
			if (contactoABuscar) {
				// Devuelve dicho contacto.
				return contactoABuscar;
			} else {
				// Caso contrario, devuelve todos los contactos.
				return this.contacts.getAll();
			}
			// Si la acción es "save"...
		} else if (options.action == "save") {
			const paramAGuardar = options.params;
			// Agrega como contacto la información del parámetro
			this.contacts.addOne(JSON.parse(paramAGuardar));
			// Sobreescribe los datos de contacts.json
			this.contacts.save();
		}
	}
}

export { ContactsController };
