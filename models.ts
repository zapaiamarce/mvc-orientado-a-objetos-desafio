import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  datos: Contact[] = [];
  load() {
    const archivosDelProducts = jsonfile.readFileSync("./contacts.json");

    archivosDelProducts.forEach((element) => {
      this.addOne(element);
    });
  }
  getAll() {
    return this.datos;
  }
  addOne(contact: Contact) {
    return this.datos.push(contact);
  }
  save() {
    return jsonfile.writeFileSync("./contacts.json", this.datos);
  }
  getOneById(id) {
    return this.datos.find((r) => {
      return r.id == id;
    });
  }
}
export { ContactsCollection };
