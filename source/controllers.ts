import { ContactsCollection } from "./models";

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
  processOptions(options: ContactsControllerOptions) {
    let contactToReturn: any = 0;

    if (options.action == "save") {
      this.contacts.addOne(options.params);
      //console.log("se ejecuto save");
    } else if (options.action == "get") {
      contactToReturn = this.contacts.getOneById(options.params);
      //console.log("se ejecuto get");
    }
    if (contactToReturn == undefined) {
      contactToReturn = this.contacts.getAll();
      //console.log("no se encontro contacto para retornar");
    }
    if (contactToReturn == 0) {
      contactToReturn = options.params;
    }
    return contactToReturn;
  }
}
const op: ContactsControllerOptions = {
  action: "save",
  params: 1,
}; /*
const controller = new ContactsController();

console.log(controller.processOptions(op));
console.log(controller.contacts.getAll());*/

export { ContactsController };
