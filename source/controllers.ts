import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action: "get" | "save";
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
  }

  processOptions(options: ContactsControllerOptions) {
    this.contacts.load();

    var resultado;

    if (options.action == "get" && options.params.id) {
      resultado = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      resultado = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      resultado = options.params; // devolvés el guardado
    }
    return resultado;
  }
}
export { ContactsController };
