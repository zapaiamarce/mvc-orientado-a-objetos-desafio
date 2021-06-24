import * as jsonfile from "jsonfile";
const json = jsonfile.readFileSync("./contacts.json");

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = []; //data es una collección de Contact
  load() {
    this.data = json;
  }

  getAll() {
    return this.data
  }

  addOne(contact: Contact) {
    this.data.push(contact)
  }

  save() {
    jsonfile.writeFileSync("./contacts.json", this.data)
  }

  getOneById(id) {
    return this.data.find((contacto) => {
      if (contacto.id == id) {
        return true;
      }
    })
  }
}
export { ContactsCollection, Contact };
