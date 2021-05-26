import * as fs from "fs";
import * as jsonfile from "jsonfile";
import { ContactsControllerOptions } from "./controllers";

class Contact {
  constructor(identificador: number, nombre: string) {
    this.id = identificador;
    this.name = nombre;
  }
  id: number;
  name: string;
}

class ContactsCollection {
  users: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync("./contacts.json");
    this.users = json;
  }

  getAll() {
    return this.users;
  }
  addOne(Contacto: Contact) {
    return this.users.push(Contacto);
  }
  getOneById(id) {
    const encontrado = this.users.find((e) => {
      if (e.id == id) return true;
    });
    return encontrado;
  }
  save() {
    const file = "./contacts.json";
    const ObjetosNuevos = this.getAll();
    jsonfile.writeFileSync(file, ObjetosNuevos);
  }
}
export { ContactsCollection, Contact };
