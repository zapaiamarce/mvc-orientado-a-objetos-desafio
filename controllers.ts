import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  constructor() {
    this.contactsOfModel = new ContactsCollection();
    this.contactsOfModel.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options["action"] == "get" && options["params"] === true) {
      return this.contactsOfModel.getAll();
    } else if (options["action"] == "get" && options["params"]) {
      return this.contactsOfModel.getOneById(options["params"]);
    } else if (options["action"] == "save") {
      this.contactsOfModel.addOne(options["params"]);
      this.contactsOfModel.save();
    } else return "No existe esta opcion";
  }
  contactsOfModel: ContactsCollection;
}
export { ContactsController };
