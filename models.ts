import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contactos: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.contactos = json;
  }
  getAll() {
    return this.contactos;
  }
  addOne(contact: Contact) {
    this.contactos.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.contactos);
  }
  getOneById(id: number) {
    var contactoEncontrado: any = this.contactos.find((i) => i.id == id);
    return contactoEncontrado;
  }
}
export { ContactsCollection, Contact };
