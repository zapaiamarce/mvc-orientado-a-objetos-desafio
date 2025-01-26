// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from "jsonfile"
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class ContactsCollection {
  contactos : Contact[];
  constructor(){
    this.contactos = []; //inicializo el vector
  }

  load(){ 
    const contactos = jsonfile.readFileSync(__dirname + "/contacts.json")
    this.contactos = contactos;
  }

  getAll():Contact[]{
    return this.contactos;
  }

  addOne(contact) {
    // Convertimos el contacto a un objeto simple antes de agregarlo, sino antecede el nombre de su clase y queda inconsistente
    const simpleContact = { id: contact.id, name: contact.name };
    this.contactos.push(simpleContact);
  }

  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.contactos, { spaces: 2 });
  }
  
  getOneById(id: number): Contact | undefined {
    return this.contactos.find(contact => contact.id === id);
  }
  
}
export { ContactsCollection, Contact };
