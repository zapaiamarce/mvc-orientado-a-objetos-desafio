import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection()
    this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    const getOne = options.action == 'get' && options.params.id
    const getAll = options.action == 'get' && !options.params.id
    if (getOne) {
      return this.contacts.getOneById(options.params.id)
    } else if (getAll) {
      return this.contacts.getAll()
    } else {
      this.contacts.addOne(options.params)
      this.contacts.save()
    }
  }
}
export { ContactsController };
