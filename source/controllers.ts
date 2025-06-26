import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    const contColl = new ContactsCollection();
    this.contacts = contColl;
    contColl.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params.id) {
      const result = this.contacts.getOneById(options.params.id);
      if (result) {
        return result;
      } else {
        return this.contacts.getAll();
      }
    } else if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();

      return;
    } else {
      return "error";
    }
  }
}

export { ContactsController };