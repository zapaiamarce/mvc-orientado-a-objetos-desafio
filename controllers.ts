import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contactCollections: ContactsCollection;
  constructor() {
    //Instancia ContactsCollection
    this.contactCollections = new ContactsCollection();
    this.contactCollections.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id) {
      return this.contactCollections.getOneById(options.params.id);
    } else if (options.action == "get") {
      return this.contactCollections.getAll();
    } else if (options.action == "save" && options.params) {
      this.contactCollections.addOne(options.params);
      this.contactCollections.save();
      console.log("¡Contacto Guardado! (No le haga caso al undefined");
    }
  }
}
export { ContactsController };
