import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action: string;
  params: any;
};

class ContactsController {
  contactsColl: ContactsCollection;
  constructor() {
    this.contactsColl = new ContactsCollection();
    this.contactsColl.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get" && options.params?.id) {
      const res = this.contactsColl.getOneById(options.params.id);
      return res;
    } else if (options.action == "save" && options.params) {
      this.contactsColl.addOne(options.params);
      this.contactsColl.save();
      return this.contactsColl.getAll();
    }
    return { error: "Error" };
  }
}

export { ContactsController };
