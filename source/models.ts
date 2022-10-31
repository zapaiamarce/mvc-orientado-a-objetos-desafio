import * as jFile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const archivoJson = jFile.readFileSync("./contacts.json");
    this.data = archivoJson;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    jFile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    return this.data.find((x) => x.id == id);
  }
}

export { ContactsCollection };
