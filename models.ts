import * as fs from "fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  constructor() {}

  load() {
    this.data = JSON.parse(
      fs.readFileSync(__dirname + "/contacts.json").toString()
    );
  }

  getAll() {
    return this.data;
  }

  addOne(newContact: any) {
    this.data.push(newContact);
  }

  save() {
    fs.writeFileSync(__dirname + "/contacts.json", JSON.stringify(this.data));
  }

  getOneById(id: number) {
    return this.data.find((con) => con.id === id);
  }
}
export { ContactsCollection };
