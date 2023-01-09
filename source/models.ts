import * as jsonfile from "jsonfile"
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = json;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id) {
    const search = this.data.find(i => {
      return i.id == id;
    })
    return search;
  }
}
export { ContactsCollection };
