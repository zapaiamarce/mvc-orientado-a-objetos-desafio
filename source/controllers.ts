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
    let toReturn;

    /*if (options.action == "save") {
      this.contacts.addOne(options.params);
      //console.log("se ejecuto save");
    } else if (options.action == "get") {
      toReturn = this.contacts.getOneById(options.params);
      //console.log("se ejecuto get");
    }
    if (toReturn == undefined) {
      toReturn = this.contacts.getAll();
      //console.log("no se encontro contacto para retornar");
    }
    if (toReturn == 0) {
      toReturn = options.params;
    }*/

    if (options.action == "get" && options.params.id) {
      toReturn = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get") {
      toReturn = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      toReturn = options.params;
      this.contacts.save();
    }
    return toReturn;
  }
} /*
const op: ContactsControllerOptions = {
  action: "save",
  params: 1,
}; 
const controller = new ContactsController();

console.log(controller.processOptions(op));
console.log(controller.contacts.getAll());*/

export { ContactsController };
