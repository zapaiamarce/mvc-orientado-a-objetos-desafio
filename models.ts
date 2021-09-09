import * as jsonfile from "jsonfile";

const file = __dirname + "/contacts.json";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  constructor() {}

  load() {
    return (this.data = jsonfile.readFileSync(file));
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    return this.data.push(contact);
  }

  save() {
    return jsonfile.writeFileSync(file, this.data);
  }

  getOneById(id) {
    return this.data.find((c) => {
      return c.id == id;
    });
  }
}

export { ContactsCollection };
