import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    return this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    return this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data)
  }
  getOneById(id: number) {
    return this.data.find((item) => {
      if (item.id == id) {
        return true;
      }
    } )
  }
}

export { ContactsCollection };
