import * as fs from "fs";
import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const require = fs.readFileSync("./contacts.json").toString();
    const parseo = JSON.parse(require);
    this.data = parseo;
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

  getOneById(id: number) {
    return this.data.find((i) => i.id == id);
  }
}

export { ContactsCollection };
