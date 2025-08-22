import contactsJason from './contacts.json'; // Asegúrate de que el archivo esté en la misma carpeta

import * as fs from 'fs';
import * as path from 'path';

class Contact {
  id: number = 0;
  name: string = "";

  constructor(id: number, name: string) {
    this.name = name;
    this.id = id;
  }
}

const filePath = path.resolve(__dirname, 'contacts.json');

class ContactsCollection {
  contactos: Contact[] = [];

load() {
  const perfil = fs.readFileSync(filePath, 'utf-8');
  this.contactos = JSON.parse(perfil);
}

  getAll() {
    return this.contactos;
  }

addOne(contact: Contact){ // Creamos el metodo que permite agregar contactos de tipo Contact
    this.contactos.push(contact); // Pusheamos el objeto al array
    return this.contactos; // Y retornamos el nuevo objeto
  }

  getOneById(id: number): Contact | undefined {
    return this.contactos.find(c => c.id === id);
  }

 save(){
  fs.writeFileSync(filePath, JSON.stringify(this.contactos, null, 2));
}
}

export { ContactsCollection };