import * as fs from "fs";
import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  datos: Contact[] = [];
  constructor() {}
  load() {
    this.datos = jsonfile.readFileSync(__dirname + "/contacts.json");
  }
  getAll() {
    return this.datos;
  }
  addOne(contact: Contact) {
    return this.datos.push(contact);
  }
  getOneById(id: number) {
    return this.datos.find((c) => {
      return c.id == id;
    });
  }
  save = () => {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.datos);
  };
}
/*
function main() {
  const c1 = new Contact(100, "adrian");
  const coll = new ContactsCollection();
  coll.load();
  console.log(coll.getAll());
  coll.addOne(c1);
  coll.save();
  console.log(jsonfile.readFileSync(__dirname + "/contacts.json"));

  coll.datos = [];
  coll.load();
  console.log(coll.getAll());
}
main();
*/

export { ContactsCollection };
