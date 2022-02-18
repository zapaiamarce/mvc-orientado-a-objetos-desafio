import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
  constructor(action: "get" | "save", params: any) {
    this.action = action
    this.params = params
  }
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection()
    this.contacts.load()
  }
  processOptions(options: ContactsControllerOptions) {
    var data = this.contacts
    if (options.action == "get") {
      var contactos = data.contacts
      var idExiste = contactos.find(c => c.id == options.params)
      if (idExiste) {
        return idExiste
      } else {
        return data.contacts
      }
    } else {
      data.addOne(options.params)
      data.save()
    }
  }
}
export { ContactsController };
