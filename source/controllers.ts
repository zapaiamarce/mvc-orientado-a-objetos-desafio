import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params?: { id: number; name: string };
};

class ContactsController {
  contactsColl: ContactsCollection;
  constructor() {
    const contacts = new ContactsCollection();
    contacts.load();
    this.contactsColl = contacts;
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action === "get" && options.params?.id) {
      const res = this.contactsColl.getOneById(options.params.id);
      return res;
    }

    if (
      options.action === "save" &&
      options.params?.id &&
      options.params?.name
    ) {
      this.contactsColl.addOne(options.params);
      this.contactsColl.save();
      return this.contactsColl.getAll();
    }
    return { error: "Error" };
  }
}

export { ContactsController };
