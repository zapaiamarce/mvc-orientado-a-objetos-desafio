import { readFileSync, writeFileSync } from "fs";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = []
  load() {
    this.data = JSON.parse(readFileSync(__dirname + "/contacts.json").toString())
  }
  getAll() {
    return this.data
  }
  addOne(contacto: Contact) {
    const yaExiste = this.getAll().find(e => e == contacto)
    if (!yaExiste) {
      this.data.push(contacto)
    }
  }
  save() {
    writeFileSync(__dirname + '/contacts.json', JSON.stringify(this.data))
  }
  getOneById(id: number) {
    return this.data.find(e => e.id == id)
  }
}
export { ContactsCollection, Contact };
