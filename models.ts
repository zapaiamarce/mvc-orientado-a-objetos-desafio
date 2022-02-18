import * as fs from "fs"
import { writeFileSync } from "fs";

class Contact {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

class ContactsCollection {
  contacts: any[] = []
  constructor() {}
  load() {
    var archivo = fs.readFileSync(__dirname + "/contacts.json")
    var data = JSON.parse(archivo.toString())
    data.forEach(c => {
      this.addOne(c)
    })
    return data
  }
  getAll() {
    return this.contacts
  }
  addOne(contact: Contact) {
    this.contacts.push(contact)
  }
  save() {
    var arrayContactos = JSON.stringify(this.contacts, null, 2)
    writeFileSync(__dirname + "/contacts.json", arrayContactos)
  }
  getOneById(id: number) {
    return this.contacts.find(c => c.id === id)
  }
}
export { ContactsCollection };
