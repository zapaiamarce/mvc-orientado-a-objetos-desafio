import { ContactsCollection } from "./models";
import { Contact} from "./models"

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: Contact;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    var result;
    if (options.action == "get" && options.params.id) {
      result = this.contacts.getOneById(options.params.id);
    } else if (options.action == "get" && !options.params.id) {
      result = this.contacts.getAll();
    } else if (options.action == "save" && options.params) {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
    return result;
  }
}

export { ContactsController };
