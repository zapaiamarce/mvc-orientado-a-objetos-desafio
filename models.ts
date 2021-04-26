import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  dato: Contact[] = [];
  load() {
    const archivoJson = jsonfile.readFileSync("./contacts.json");
    this.dato = archivoJson;
  }
  getAll() {
    return this.dato;
  }
  addOne(contact: Contact) {
    this.dato.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.dato);
  }
  getOneById(id: number) {
    const objFinded = this.dato.find((r) => r.id == id);
    return objFinded;
  }
}
export { ContactsCollection };
