import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contacts: ContactsCollection;
  constructor() {}
  processOptions(options: ContactsControllerOptions) {}
}
export { ContactsController };
