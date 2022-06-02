import * as jsonfile from "jsonfile";
let fs = require("fs");

class Contact {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const productos = JSON.parse(fs.readFileSync(__dirname + "/contacts.json"));
    productos.forEach((element) => {
      this.data.push(element);
    });
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    const file = "./contacts.json";
    const obj = this.data;
    jsonfile.writeFileSync(file, obj, { spaces: 2 });
  }
  getOneById(id) {
    return this.data.find((i) => {
      return i.id == id;
    });
  }
}
export { ContactsCollection };
