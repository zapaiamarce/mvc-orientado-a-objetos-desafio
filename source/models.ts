import "./contacts.json";
import * as jsonfile from "fs";

class Contact {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json: string = jsonfile.readFileSync("./contacts.json", {
      encoding: "utf8",
    });
    const dataParsed = JSON.parse(json);
    if (Array.isArray(dataParsed)) {
      this.data = dataParsed as Contact[];
    } else {
      throw new Error("El formato del archivo JSON no es válido.");
    }
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync(
      "./contacts.json",
      JSON.stringify(this.data, null, 2)
    );
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => contacto.id === id);
    return encontrado;
  }
}
export { ContactsCollection };
