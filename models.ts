import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const promesa = jsonfile.readFile("./contacts.json");
    promesa.then((json) => {
      this.data = json;
    });
    return promesa;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    return this.data.push(contact);
  }
  save() {
    jsonfile.writeFile("./contacts.json", this.data);
  }
  getOneById(id) {
    const contactFound = this.data.find((i) => i.id == id);
    return contactFound;
  }
}

export { ContactsCollection };
