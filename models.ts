import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    this.data = jsonfile.readFileSync("./contacts.json");
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    // const contactoEncontrado = this.data.find((c) => c.id === contact.id);
    // if (!contactoEncontrado) {
    //   this.data.push(contact);
    //   console.log("Contacto agregado correctamente");
    //   return;
    // }
    // console.log(
    //   `Ya existe el id: ${contact.id}. No se puede agregar este contacto`
    // );
    // return;
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id: number) {
    const resultado = this.data.find((c) => c.id === id);
    // if (resultado) {
    //   return resultado;
    // }
    // console.log(`No se encontraron contactos con el id: ${id}`);
    return resultado;
  }
}
export { ContactsCollection };
