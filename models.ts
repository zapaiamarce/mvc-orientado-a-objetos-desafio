import * as jsonfile from "jsonfile"
import * as contacts from "./contacts.json"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  constructor(){
    this.data = []
  }
  
  data: Contact[]
  
  load(){
    const data = contacts
    return this.data = data
  }

  getAll(){
    return this.data
  }

  addOne(contact){
    this.data.push(contact)
  }

  save(){
    const file = './contacts.json'
    const dataAGuardar = this.data
    return jsonfile.writeFileSync(file, dataAGuardar)
  }

  getOneById(id){
    const contactos = this.data
    return this.data.find((c)=>c.id == id)
  }
}
export { ContactsCollection };