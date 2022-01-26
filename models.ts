//El modelo interactua con la data
import { readFileSync, writeFileSync } from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contactos: any[] = [];

  load() {
    function getDataFromJSON() {
      var path = __dirname + "/contacts.json";
      var myData = readFileSync(path);
      return myData;
    }
    this.contactos = getDataFromJSON();
    return this.contactos;
  }
  getAll() {
    return this.contactos;
  }
  addOne(contact: Contact) {
    this.contactos.push(contact);
  }
  save() {
    var path = __dirname + "/contacts.json";
    writeFileSync(path, this.contactos);
  }
  getOneById(id: number) {
    const contactFound = this.contactos.find((x) => x["id"] == id);
    return contactFound;
  }
}

export { ContactsCollection };
