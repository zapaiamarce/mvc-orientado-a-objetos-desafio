import { readFileSync, writeFileSync } from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  datosGuardados: any[] = [];
  load() {
    const archivo = readFileSync(__dirname + "/contacts.json");
    archivo.forEach((element) => {
      this.datosGuardados.push(element);
    });
    return this.datosGuardados;
  }
  getAll() {
    return this.datosGuardados;
  }
  addOne(contact: Contact) {
    return this.datosGuardados.push(contact);
  }
  save() {
    let data = JSON.parse(JSON.stringify(this.datosGuardados));
    return writeFileSync("contacts.json", data);
  }
  getOneById(id) {
    const contactById = this.datosGuardados.find((item) => item.id == id);
    return contactById;
  }
}

export { ContactsCollection };
