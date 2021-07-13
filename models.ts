import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  // array vacio si uso foreach pero si pongo this.data = no hace falta el array vacio
  // fs es igual a paquete json foreach igual a .....
  load() {
    // const archivoJson = fs.readFileSync("./contacts.json").toString();
    // const archivosParseados = JSON.parse(archivoJson);
    // this.data = archivosparseados;
    const json = jsonfile.readFileSync("./contacts.json");
    this.data = json;
    // this.data = this.data.concat(archivosParseados); agregar =[]
    // archivosParseados.forEach((a) => this.data.push(a));agregar =[]
    // console.log(archivosParseados);
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    //porque hizo un require
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id) {
    return this.data.find((a) => a.id == id);
  }
}
export { ContactsCollection };
