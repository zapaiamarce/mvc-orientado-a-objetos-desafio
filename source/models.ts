import * as jsonfile from "jsonfile";
import * as fs from "fs";
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    return (this.data = jsonfile.readFileSync(__dirname + "/contacts.json"));
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    return fs.writeFileSync(
      __dirname + "/contacts.json",
      JSON.stringify(this.data)
    );
  }
  getOneById(id: number) {
    const contacts = this.getAll();
    const res = contacts.find((contact: Contact) => {
      if (contact.id == id) {
        return contact;
      }
    });
    if (res !== undefined) {
      return res;
    } else {
      return contacts;
    }
  }
}

export { ContactsCollection, Contact };
