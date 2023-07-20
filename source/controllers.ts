import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save";
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const listaContactos = new ContactsCollection();
    listaContactos.load();
    this.contacts = listaContactos;
  }
  processOptions(options: ContactsControllerOptions) {
    let resultados;
    if (options.action == "get" && options.params.id) {
      resultados = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      resultados = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return resultados;
  }
}
export { ContactsController };
