import * as _ from "lodash";
import * as jsonfile from "jsonfile";

class Contact {
    id: number;
    name: string;
}

class ContactsCollection {
    datosContacts: Contact[] = [];
    load() {
        this.datosContacts = jsonfile.readFileSync("./contacts.json");
    }
    getAll() {
        return this.datosContacts;
    }
    addOne(contact: Contact) {
        this.datosContacts.push(contact);
    }
    getOneById(id: number) {
        const resultado = _.find(this.datosContacts, { id: id });
        return resultado;
    }
    save() {
        jsonfile.writeFileSync("./contacts.json", this.datosContacts);
    }
}
export { ContactsCollection };
