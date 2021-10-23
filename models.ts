import { readFileSync } from "fs";
import { writeFileSync } from "fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {

  dataDeContactos: Contact[] = [];

  load(){
    //debe tener un método load() que cargue
    //la info desde el contacts.json y guardarla en data

    const dataAlmacenada = (readFileSync( __dirname + "/contacts.json")).toString();
    const dataConvertidaAObj = JSON.parse(dataAlmacenada);
    this.dataDeContactos = dataConvertidaAObj;
  }

  getAll(){
    //debe devolverme la collection completa
    return this.dataDeContactos;
  }

  addOne(contact:Contact){
    //debe agregar un contacto a la lista
    this.dataDeContactos.push(contact);
  }

  save(){
    //save debe escribir todo el objeto interno en el archivo contacts.json
    const datosAAlmacenar = JSON.stringify(this.dataDeContactos);
    writeFileSync(__dirname + "/contacts.json", datosAAlmacenar);

  }

  getOneById(id){
    //debe devolver uno de los contactos por id
    const contactoEncontrado = this.dataDeContactos.find(contacto => contacto.id === id);
    return contactoEncontrado;

  }

}

export { ContactsCollection };
