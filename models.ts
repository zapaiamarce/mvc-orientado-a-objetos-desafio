import * as jsonFile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection extends Contact {
  data: Contact[] = [];

  load() {
    const data = jsonFile.readFileSync("./contacts.json");
    console.log(data);
    this.data = data;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    const passed = (err) => {
      if (err) {
        console.log(err);
        return;
      }
    };
    jsonFile.writeFileSync("contacts.json", this.data, passed);
  }

  getOneById(id) {
    const contact = this.data;
    return contact.find((cont) => cont.id == id);
  }
}

export { ContactsCollection };
