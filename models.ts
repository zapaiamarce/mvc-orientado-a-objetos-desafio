import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = []; // no olvidarse de inicializar mis collection!!!
  load() {
    this.data = jsonfile.readFileSync("./contacts.json");
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json");
  }
  getOneById(id) {}
}

const con = new ContactsCollection();

export { ContactsCollection };
