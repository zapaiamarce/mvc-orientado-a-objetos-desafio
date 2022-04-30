import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const arcJson = jsonfile.readFileSync(__dirname + "./contacts.json");
    this.data = arcJson;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    return this.data.push(contact);
  }
  save() {
    const write = jsonfile.writeFileSync(
      __dirname + "./contacts.json",
      this.data
    );
    return write;
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
export { ContactsCollection };
