import {ContactsCollection} from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}
class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const collection = new ContactsCollection();
    collection.load();
    this.contacts = collection;
  }
  processOptions(options: ContactsControllerOptions) {
    var nuevo;
    if (options.action == "get" && options.params.id) {
      nuevo = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      nuevo = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      nuevo = this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return nuevo;
  }
}

export {ContactsController};