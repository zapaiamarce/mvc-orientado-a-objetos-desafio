// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from 'jsonfile';

// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

//model
class ContactsCollection {
  internalDate: Contact[];
  constructor() {
    this.internalDate = [];
  }

  load(){
    const infoJson = require('./contacts.json');
    this.internalDate = infoJson;
  }

  getAll(){
    return this.internalDate;
  }

  addOne(contact: Contact){
     this.internalDate.push(contact); 
  }

  save() {
    jsonfile.writeFile('./contacts.json', this.internalDate, { spaces: 2 }, (err) => {
      if (err) {
        console.error('Error al guardar el archivo:', err);
      } else {
        console.log('Archivo guardado exitosamente');
      }
    });
  }

  getOneById(id: number): Contact | undefined {
    return this.internalDate.find(contact => contact.id === id)
  }
}

export { ContactsCollection };

