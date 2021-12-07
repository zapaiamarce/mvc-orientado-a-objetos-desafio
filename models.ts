import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const datos = jsonfile.readFileSync(__dirname + "/contacts.json")
    this.data = datos;
  }
  getAll() {
    return this.data
  }
  addOne(contact:Contact) {
    this.data.push(contact)
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data)
  }
  getOneById(id) {
    return this.data.find(function(item) {
      return item.id == id;
    });
  }
}


export { ContactsCollection };
