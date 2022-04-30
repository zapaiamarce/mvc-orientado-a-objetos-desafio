import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const arcJson = jsonfile.readFileSync("./contacts.json");
    this.data = arcJson;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    const buscando = this.data.find((identificador) => {
      if (identificador.id == id) {
        return true;
      }
    });
    return buscando;
  }
}
export { ContactsCollection, Contact };
