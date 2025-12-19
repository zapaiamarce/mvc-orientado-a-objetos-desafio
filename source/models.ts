// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as fs from "fs";
import * as path from "path";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  arrayDeContactos: Contact[] = [];
  load() {
    const data = fs.readFileSync(
      path.join(__dirname, "contacts.json"),
      "utf-8"
    );
    this.arrayDeContactos = JSON.parse(data);
  }
  getAll() {
    return this.arrayDeContactos;
  }
  addOne(contact) {
    this.arrayDeContactos.push(contact);
  }
  save() {
    const actualizacion = JSON.stringify(this.arrayDeContactos, null, 2);
    const ruta = path.join(__dirname, "contacts.json");
    fs.writeFileSync(ruta, actualizacion, "utf-8");
  }
  getOneById(id: number) {
    return this.arrayDeContactos.find((contacto) => contacto.id === id);
  }
}
export { ContactsCollection };
