import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  arrayData: Contact[] = [];
  load() {
    const readJson = jsonfile.readFileSync("./contacts.json");
    this.arrayData = readJson;
  }

  getAll() {
    return this.arrayData;
  }
  addOne(contact: Contact) {
    this.arrayData.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.arrayData);
  }
  getOneById(id) {
    const foundId = this.arrayData.find((e) => {
      return e.id == id;
    });
    return foundId;
  }
}

export { ContactsCollection, Contact };
