import { ContactsCollection } from "./models";

class ContactsControllerOptions {
  action: "get" | "save";
  params: any = undefined;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts= new ContactsCollection()
    this.contacts.load()
  };
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "save"){
      const parseJSON = JSON.parse(options.params);
      this.contacts.addOne(parseJSON)
      return this.contacts.getAll()
    }else if(options.action== "get" && options.params!== undefined){
      return this.contacts.getOneById(options.params)
    }else{
      return this.contacts.getAll()
    }
  };
};

export { ContactsController, ContactsControllerOptions };
