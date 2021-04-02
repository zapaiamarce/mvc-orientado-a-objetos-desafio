import * as fs from "fs";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection extends Contact {
  data: Contact[] = [];
  load() {
    const archivo = fs.readFileSync(__dirname + "/contacts.json").toString();
    const productos = JSON.parse(archivo);
    this.data = productos;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    fs.writeFileSync(__dirname + "/contacts.json", JSON.stringify(this.data));
  }
  getOneById(id: number): Contact {
    const contactos = this.getAll();
    return contactos.find((c) => c.id == id);
  }
}
export { ContactsCollection };
