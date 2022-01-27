import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection; //es el objeto modelo con el array de contactos y sus metodos
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id) {
      return this.contacts.contactos.find((x) => {
        return x.id == options.params.id;
      });
    } else if (options.action == "get") {
      return this.contacts.getAll();
    }

    if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      console.log(options.params, "contacto agregado");
    }
  }
}
export { ContactsController };
