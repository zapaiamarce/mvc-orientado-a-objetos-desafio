import { ContactsCollection } from "./models";

class ContactsControllerOptions {
   constructor(a: "get" | "save", p?) {
      this.action = a;
      if (p) {
         this.params = p;
      }
   }
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
      switch (options.action) {
         case "get":
            if (options.params) {
               return this.contacts.getOneById(options.params);
            } else {
               return this.contacts.getAll();
            }
         case "save":
            this.contacts.addOne(options.params);
      }
   }
}
export { ContactsController, ContactsControllerOptions };
