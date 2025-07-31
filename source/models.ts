// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"
import * as fs from 'fs';
import * as path from 'path';

export type Contact = {
  id: number;
  name: string;
}

const filePath = path.resolve(__dirname, 'contacts.json');

class ContactsCollection {
  contactos: Contact[] = [];

load() {
  const perfil = fs.readFileSync(filePath, 'utf-8');
  this.contactos = JSON.parse(perfil);
}
      addOne(contact: Contact) {
    if (contact.id && contact.name) {
        this.contactos.push(contact);
    } else {
        throw new Error('El contacto debe tener un id y un nombre');
    }
}
getAll(){
  return this.contactos;
}
save(){
  fs.writeFileSync(filePath, JSON.stringify(this.contactos, null, 2));
}
getOneById(id: number){
  return this.contactos.find(c => c.id == id);
}
}
export { ContactsCollection };
