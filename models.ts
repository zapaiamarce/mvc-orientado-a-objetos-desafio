import * as jsonfile from "jsonfile";

export class Contact {
  name: String;
  id: Number;
}

class ContactsCollection {
  arrayConLaData: Contact[] = [];

  load() {
    var resultado = jsonfile.readFileSync("./contacts.json");
    this.arrayConLaData = resultado;
  }
  getAll() {
    return this.arrayConLaData;
  }
  addOne(contact: Contact) {
    this.arrayConLaData.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.arrayConLaData);
  }
  getOneById(id: Number) {
    const resultado = this.arrayConLaData.find((i) => i.id == id);
    return resultado;
  }
}
export {ContactsCollection};