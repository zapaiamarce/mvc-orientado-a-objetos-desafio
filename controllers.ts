import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  data: ContactsCollection;
  constructor() {
    this.data = new ContactsCollection;
    this.data.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == 'get' && options.params.id) {
      if (typeof options.params.id == 'number') {
        return this.data.getOneById(options.params.id);
      }
    } else if (options.action == 'get') {
      return this.data.getAll();
    } else if (options.action == 'save' && options.params) {
      this.data.addOne(options.params);
      this.data.save();
    }
  }
}

export { ContactsController };
