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
    let response: any;
    if (options.action == "get" && options.params.id) {
      this.contacts.dataList.forEach((contact) => {
        if (contact.id == options.params.id) {
          response = contact;
        }
      });
      return response;
    } else if (options.action == "get") {
      response = this.contacts.getAll();
      return response;
    } else if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}
export { ContactsController };
