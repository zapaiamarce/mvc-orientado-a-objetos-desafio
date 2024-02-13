import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const json = jsonfile.readFileSync("source/contacts.json");
    this.data = json;
  }

  getAll() {
    return this.data;
  }

  addOne(contact: Contact) {
    this.data.push(contact);
  }

  save() {
    jsonfile.writeFileSync("source/contacts.json", this.data);
  }

  getOneById(id) {
    const encontrado = this.data.find((e) => {
      if (e.id == id) {
        return true;
      }
      return;
    });
    return encontrado;
  }
}
export { ContactsCollection };
