import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
	action: "get" | "save";
	params: any;
}

class ContactsController {
	contacts: ContactsCollection;
	constructor() {
		this.contacts = new ContactsCollection();
		this.contacts.load();
	}
	processOptions(options: ContactsControllerOptions) {
		var reslutado;
		if (options.action == "get" && options.params.id) {
			reslutado = this.contacts.getOneById(options.params.id);
		} else if (options.params.id == "get") {
			reslutado = this.contacts.getAll();
		} else if (options.action == "save" && options.params) {
			this.contacts.addOne(options.params);
			this.contacts.save();
		}
		return reslutado;
	}
}
export { ContactsController };

// mañana ver devuelta la resu, y hacer y ver hasta que sepra cada parte, mañana seria hacer esto y estaria bueno leer y ver el video del siguiente cap, al menos para ir viendo.
// ayer vi la resu de este cap, mañana ver de vuelta y hacr varias veces el desafio de este cap, despues leer, pasar al drive y ver el video del cap.
// si no llego aenteder el cap 12 busca en Yotube a ver si aprece asyn o promesas
