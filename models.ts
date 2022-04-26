import * as fs from "fs"
import * as jsonfile from "jsonfile"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    const leerJSON = jsonfile.readFileSync(__dirname + "/contacts.json")
    this.contacts = leerJSON;
  };
  getAll() {
    return this.contacts;
  };
  addOne(contact) {
    this.contacts.push(contact);
  };
  save(){ 
    jsonfile.writeFileSync("./contacts.json", this.contacts);
  }
  getOneById(id) { 
    const busqueda = this.contacts.find(i => i.id == id);
    return busqueda;
  }
}
export { ContactsCollection };
