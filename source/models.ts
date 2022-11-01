import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  arrayDeDatos: Contact[] = [];
  load() {
    const leerJson = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.arrayDeDatos = leerJson;
  }
  getAll() {
    return this.arrayDeDatos;
  }
  addOne(contacto: Contact) {
    this.arrayDeDatos.push(contacto);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.arrayDeDatos);
  }
  getOneById(id) {
    return this.arrayDeDatos.find((item) => item.id == id);
  }
}
export { ContactsCollection, Contact };
