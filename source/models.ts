// este import existe solo para que tsc lo tome y lo copie a /build
import * as contactos from "./contacts.json";
import * as jsonfile from "jsonfile";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contacts: Contact[] = [];
  constructor(){
  }

  load(){
    console.log("JSON importado:", contactos);
    this.contacts = contactos;
  }
  addOne(contact: Contact){
    this.contacts.push(contact)
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.contacts) 
  }
  getAll(){
    return this.contacts
  }
  getOneById(id: number){
   return this.contacts.find((p: Contact) => p.id === id);
  }
  
}
export { ContactsCollection };
