import * as jsonfile from "jsonfile";

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
    const dbActual = jsonfile.readFileSync("./contacts.json");
    this.data = dbActual;
  }
  getAll(): Object[] {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    const dbActualizada = this.data;
    jsonfile.writeFileSync("./contacts.json", dbActualizada);
  }
  getOneById(id: number) {
    const encontrado = this.data.find((contacto) => {
      return contacto.id == id;
    });
    return encontrado;
  }
}

export { ContactsCollection };

/* Se podria refactorizar: 
getOneById(id: number) {
  return this.data.filter((c) => {
    return c.id == id;
  });
}*/
