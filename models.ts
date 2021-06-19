import * as fs from "fs";
import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  constructor() {}
  //aca iria una propiedad que guarde el array, por ejemplo datos
  load() {
    const archivoOriginal = fs.readFileSync(__dirname + "/contacts.json");
    const archivoString = archivoOriginal.toString();
    const archivoDatos = JSON.parse(archivoString);
    archivoDatos.forEach((p) => {
      this.addOne(p);
    });
    //debe cargar el array del json y guardarlo en data
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    return jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id: number) {
    var byId = this.data.find(function (item) {
      if (item.id == id) {
        return item;
      }
    });
    return byId;
    //devolver un contacto segun el id
  }
}
export { ContactsCollection };
