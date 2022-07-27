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
    if (options.action == "get" && options.params.id) {
      return console.log(this.contacts.getOneById(options.params.id));
    } else if (options.action == "get") {
      return console.log(this.contacts.getAll());
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return console.log(this.contacts.getAll());
    }
  }
}
// test para el controllers

export { ContactsController };
