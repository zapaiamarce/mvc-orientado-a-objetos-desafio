import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: { id: number; name: string }[] = [];

  load() {
    const contacts = jsonfile.readFileSync("./contacts.json");

    contacts.forEach((element) => {
      this.data.push(element);
    });
  }

  getAll() {
    return this.data;
  }

  addOne(contact: { id: number; name: string }) {
    this.data.push(contact);
    return this.data;
  }

  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }

  getOneById(id: number) {
    const res = this.data.filter((e) => {
      return e.id === id;
    });
    return res[0];
  }
}

export { ContactsCollection };
