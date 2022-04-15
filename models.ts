import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contactList: Contact [] = [];

  load() {
    const contactos = jsonfile.readFileSync("./contacts.json")
    this.contactList = contactos
  }

  getAll() {
    return this.contactList
  }

  addOne(contact) {
    this.contactList.push(contact)
  }

  save() {
    const todosLosContactos = this.getAll()
    jsonfile.writeFileSync("./contacts.json", todosLosContactos)
  }

  getOneById(id) {
    return this.contactList.find((e) => {return e.id == id})
  }
}

export { ContactsCollection };
