import * as fs from "fs"
import * as js from "jsonfile"


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
 
  arrayDeDatos:Contact[] = []

  load(){
  const contacts_JSON = fs.readFileSync(__dirname + "/contacts.json").toString()
  const contacts_Parseado = JSON.parse(contacts_JSON)
  this.arrayDeDatos = this.arrayDeDatos.concat(contacts_Parseado)}

  getAll(){
    return this.arrayDeDatos
  }

  addOne(contact:Contact) {
    this.arrayDeDatos.push(contact)
  }

  save(){
    js.writeFileSync(__dirname + "/contacts.json",this.getAll(),{ spaces: 2 })
  }

  getOneById(id:number){
    return this.arrayDeDatos.find(contact => {return contact.id == id})
  }

}



export { ContactsCollection };
