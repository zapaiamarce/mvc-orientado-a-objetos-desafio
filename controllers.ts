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
    if (options.action == "get") {
      const idAEncontrar: number = options.params;
      const personaEncontrada = this.contacts.getOneById(idAEncontrar);
      if (personaEncontrada) {
        return personaEncontrada;
      } else {
        return this.contacts.getAll();
      }
    } else if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
      return this.contacts.getAll();
    }
  }
}
export { ContactsController };
