import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  constructor(action: "get" | "save", params: any){
    this.action = action;
    this.params = params;
  }
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection;
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "save") {
      this.contacts.addOne(options.params);
    }
    if (options.action == "get" && this.contacts.data.find(c => c.id == options.params)) {
      return this.contacts.data.find(c => c.id == options.params);
    } else if (options.action == "get") {
      return this.contacts.data;
    }
  }
}
export { ContactsController };
