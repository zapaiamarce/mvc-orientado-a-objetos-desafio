import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const collection = jsonfile.readFileSync("./contacts.json");
    this.data = collection;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    const file = "./contacts.json";
    const obj = this.data;

    jsonfile.writeFileSync(file, obj);
  }
  getOneById(id: number) {
    const contacts = this.data;
    const find = contacts.find(function (obj) {
      if (obj.id == id) {
        return obj.id == id;
      }
    });
    return find;
  }
}
export { ContactsCollection };
