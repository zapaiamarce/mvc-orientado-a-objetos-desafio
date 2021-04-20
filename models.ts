
import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contactos:Contact[]
  constructor(){
    this.contactos = []
  }
  //lee el archivo json y lo carga en contactos
  load(){
    const archivoContactos = jsonfile.readFileSync("./contacts.json")
    this.contactos = archivoContactos 
  }
  //devuelve todos los contactos
  getAll(){
    return this.contactos
  }
  //agrega un contacto nuevo
  addOne(contact:Contact){
    this.contactos.push(contact)
  }
  //guarda el array contactos en el archivo json
  save(){
  const file = "./contacts.json"
  const contacts = this.contactos
  jsonfile.writeFileSync(file, contacts)
  }
  //busca un contacto por id
  getOneById(id:number){
    const contactoEncontrado = this.contactos.find((i)=> i.id == id)
    if (contactoEncontrado) {
      return contactoEncontrado
    }
    else{
      return "id incorrecto"
    }
    
  }
}
export { ContactsCollection };
