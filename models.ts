import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = [];
  load() {
    const contenidoDelArchivo = jsonfile.readFileSync("./contacts.json");
    this.contacts = contenidoDelArchivo;
  }
  getAll(): Contact[] {
    return this.contacts;
  }
  addOne(contact: Contact): void {
    this.contacts.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.contacts);
  }
  getOneById(id: number): Contact {
    return this.contacts.find((i) => i.id === id);
  }
}
export { ContactsCollection };
