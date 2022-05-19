import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    var arcJson = jsonfile.readFileSync("./contacts.json");
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
    return this.data.find((identificador) => identificador.id == id);
  }
}
export { ContactsCollection, Contact };
