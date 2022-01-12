import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor(contacts: ContactsCollection) {
    this.contacts = contacts;
  }
  processOptions(options: ContactsControllerOptions) {}
}
export { ContactsController };
