import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const contactsJson = jsonfile.readFileSync("./contacts.json");
    this.data = this.data.concat(contactsJson);
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
    return this.data.find(function (item) {
      return item.id == id;
    });
  }
}

export { ContactsCollection };
