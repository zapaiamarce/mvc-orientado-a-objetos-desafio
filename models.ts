import * as fs from "fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const json = fs.readFileSync(__dirname + "/contacts.json");
    const string = json.toString();
    const contactosDelArchivo = JSON.parse(string);
    contactosDelArchivo.forEach((element) => {
      this.data.push(element);
    });
    // return (this.data = contactosDelArchivo);
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  getOneById(id) {
    return this.data.find((x) => x.id == id);
  }
  save() {
    const paraGuardar = JSON.stringify(this.data);
    fs.writeFileSync("./contacts.json", paraGuardar);
  }
}
export { ContactsCollection };
