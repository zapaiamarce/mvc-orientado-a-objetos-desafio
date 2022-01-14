import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const contactsParseados = jsonfile.readFileSync("./contacts.json");
    contactsParseados.forEach((obj) => {
      this.addOne(obj); // Carga contacts.json y la guarda en data
    });
  }
  getAll() {
    return this.data; // Devuelve toda la colleción de Contacts (data)
  }
  addOne(contact: Contact) {
    return this.data.push(contact); // Agrega un contacto a la colleción de Contacts (data)
  }
  save() {
    return jsonfile.writeFileSync("./contacts.json", this.data); // Guarda la colección en "./contact.json"
  }
  getOneById(id) {
    return this.data.find((item) => {
      return item.id == id;
    }); // Devuelve el contacto con el id
  }
}
export { ContactsCollection };
