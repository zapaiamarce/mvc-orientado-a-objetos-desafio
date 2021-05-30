import { ContactsCollection } from "./models";
import * as _ from "lodash";

export class ContactsControllerOptions {
    action: "get" | "save";
    params: any;
}

class ContactsController {
    contacts: ContactsCollection;
    constructor() {
        this.contacts = new ContactsCollection;
        this.contacts.load();
    }
    processOptions(options: ContactsControllerOptions) {
        if (options.action == "get") {
            if (this.contacts.getOneById(options.params)) {
                return this.contacts.getOneById(options.params);
            } else {
                return this.contacts.getAll();
            }
        } else {
            this.contacts.addOne(options.params);
            this.contacts.save();
        }
    }
}
export { ContactsController };
