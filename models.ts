import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const contacts = jsonfile.readFileSync("./contacts.json");
    this.data = contacts;
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
    var getOne;
    this.data.find(function (contact) {
      if (contact.id == id) {
        getOne = contact;
      }
    });
    return getOne;
  }
}
export { ContactsCollection };
