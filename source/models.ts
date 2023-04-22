import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    // cargue la info de contacts.json y la guarde en data
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = json;
  }
  getAll() {
    //devolver la coleccion completa
    return this.data;
  }
  addOne(contact: Contact) {
    //agregar un contacto a la lista push
    return this.data.push(contact);
  } 
  save() {
    // escribir todo el objeto interno en el archivo contacts.json
    const json = jsonfile.writeFileSync(
      __dirname + "/contacts.json",
      this.data
    );
    return json;
  }
  getOneById(id) {
    // devolver uno de los contactos por id
    return this.data.find((m) => m.id == id);
  }
}
export { ContactsCollection, Contact };
