import { Contact, ContactsCollection } from "./models";
import c from "chalk";

export type ContactsControllerOptions = {
  action?: "get" | "save";
  params: Contact;
};

export class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    let result: any[] = [];

    if (options.action == "get" && options.params.id) {
      console.log("controlerOptions: ", options);
      result = this.contacts.getOneById(options.params.id);
      console.log(c.green("gettin contact by id:", options.params.id));
    } else if (options.action == "get") {
      result = this.contacts.getAll();
      console.log(c.green("gettin all contacts"));
    } else if (options.action == "save" && options.params) {
      if (options.params.id && options.params.name) {
        console.log("controlerOptions: ", options);
        this.contacts.addOne(options.params);
        this.contacts.save();
        console.log(c.green("Contact saved!"));
      } else {
        console.log(c.red("action save requires id and name"));
      }
    }
    return result;
  }
}
