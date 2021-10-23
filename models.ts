import * as fs from 'fs';

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  listaContactos: Contact[] = [];

  constructor(){}

  load(){
    this.listaContactos = JSON.parse(fs.readFileSync(`${__dirname}/contacts.json`).toString());
    // cargue la info desde el contacts.json y guardarla en **data**
  }

  getAll(){
    return this.listaContactos;
  }

  addOne(contact:Contact){
    this.listaContactos.push(contact);
  }

  save(){
    fs.writeFileSync(`${__dirname}/contacts.json`, JSON.stringify(this.listaContactos));
    // escribir objeto interno en contacts.json
  }

  getOneById(id){
    return this.listaContactos.find( contacto => contacto.id === id);
  }
}

export { ContactsCollection };
