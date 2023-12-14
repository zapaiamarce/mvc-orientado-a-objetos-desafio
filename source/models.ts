import * as jsonfile from "jsonfile";
import * as path from "path";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const filepath = path.resolve(__dirname, "./contacts.json");
    const json = jsonfile.readFileSync(filepath);
    this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    const filepath = path.resolve(__dirname, "./contacts.json");
    return jsonfile.writeFileSync(filepath, this.data);
  }
  getOneById(id) {
    const encontrado = this.data.find((contact) => contact.id === id);
    return encontrado;
  }
}
export { ContactsCollection };
