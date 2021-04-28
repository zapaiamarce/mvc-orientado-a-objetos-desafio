import * as fs from "fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  constructor() {
    this.data = [];
  }
  load() {
    //- debe tener un método load() que cargue la info desde el contacts.json y guardarla en data
    this.data = JSON.parse(
      fs.readFileSync(__dirname + "/contacts.json").toString()
    );
    return this.data;
  }

  getAll() {
    //debe devolverme la collection completa
    return this.data;
  }

  addOne(contact: Contact) {
    //debe agregar un contacto a la lista
    this.data.push(contact);
    this.save();
    return contact;
  }

  save() {
    //debe escribir todo el objeto interno en el archivo contacts.json
    return fs.writeFileSync(
      __dirname + "/contacts.json",
      JSON.stringify(this.data)
    );
  }

  getOneById(id: number): Contact {
    //debe devolver uno de los contactos por id
    const data = this.load();
    const contactoEncontrado = data.find((i) => {
      return i.id == id;
    });
    return contactoEncontrado;
  }
}

export { ContactsCollection };
