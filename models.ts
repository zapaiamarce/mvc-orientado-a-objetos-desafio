import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  constructor() {}
  arrayData: Contact[] = [];
  load() {
    this.arrayData = jsonfile.readFileSync("./contacts.json");
  }
  getAll() {
    return this.arrayData;
  }
  addOne(contact: Contact) {
    const checkID = this.arrayData.find((p) => p.id == contact.id);
    if (checkID == undefined) {
      this.arrayData.push(contact);
      console.log("añadido con exito");
    } else {
      console.log("tiene un id inválido o uno ya existente");
    }
  }
  getOneById(id) {
    const resultado = this.arrayData.find((p) => p.id == id);
    return resultado;
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.arrayData);
  }
}
export { ContactsCollection };
