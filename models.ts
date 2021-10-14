/*

Dentro del módulo models.ts crear y exportar la clase ContactsCollection

    * la clase debe tener una propiedad interna (se puede llamar como quieran) donde se guarde el array con la data. (LIQUIDADO)
    * debe tener un método load() que cargue la info desde el contacts.json y guardarla en data (LIQUIDADO)
    * getAll() debe devolverme la collection completa (LIQUIDADO)
    * addOne(contact) {} debe agregar un contacto a la lista (LIQUIDADO)
    * save debe escribir todo el objeto interno en el archivo contacts.json (LIQUIDADO)
    * getOneById(id) debe devolver uno de los contactos por id (LIQUIDADO)

*/

import { fstat,writeFileSync } from 'fs';
import { stringify } from 'querystring';
import * as contactsJSON from './contacts.json';

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {

  propiedadInterna:Contact[] = []
  
  load(){
    return this.propiedadInterna = contactsJSON
  }

  getAll(){
    return this.propiedadInterna
  }

  addOne(contact) {
    return this.propiedadInterna.push(contact)
  }

  save(){
    const data = JSON.stringify(this.getAll())
    return writeFileSync("./contacts.json", data )
  }

  getOneById(id:number){
    return this.propiedadInterna.find(x => x.id === id)
  }


}
export { Contact, ContactsCollection };
