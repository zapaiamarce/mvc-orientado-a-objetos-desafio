import * as jsonfile from "jsonfile";
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const contactos = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = contactos;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id) {
    const devuelve = this.data.find((contactos) => contactos.id == id);
    return devuelve;
  }
}
export { ContactsCollection };
