import * as fs from "fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  datos: any[] = [];

  load() {
    const contenidoDelArchivo = fs
      .readFileSync(__dirname + "/contacts.json")
      .toString();
    const contactosDelArchivo = JSON.parse(contenidoDelArchivo);

    this.datos = contactosDelArchivo;
  }

  getAll() {
    return this.datos;
  }

  addOne(contact: Contact) {
    //añade un nuevo contacto
    this.datos.push(contact);
  }

  save() {
    //guarda en el json contacts, toda la modificacion de los contactos
    const collectionJson = JSON.stringify(this.datos);
    fs.writeFileSync(__dirname + "/contacts.json", collectionJson);
  }

  getOneById(id) {
    //busco el contacto con la id deseada con fin y retorno ese contacto
    const encontrado = this.datos.find((contacto) => {
      return contacto.id == id;
    });
    return encontrado;
  }
}
/*
function main() {
  const listaContactos = new ContactsCollection();
  listaContactos.load();
  console.log(listaContactos.datos);
  console.log(listaContactos.getAll());
  const contenidoDelArchivo = fs
    .readFileSync(__dirname + "/contacts.json")
    .toString();
  const contactosDelArchivo = JSON.parse(contenidoDelArchivo);
  console.log(contactosDelArchivo);
  var nuevoContacto = new Contact();
  nuevoContacto = { id: 13, name: "Mariano" };
  listaContactos.addOne(nuevoContacto);
  console.log(listaContactos);
  listaContactos.save()
}
main();
*/

export { ContactsCollection };
export { Contact };
