import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = []
  load(){
    const contenido = jsonfile.readFileSync("./contacts.json")
    this.contacts = contenido
  }
  getAll(){
    return this.contacts
  }
  addOne(contact: Contact){
    return this.contacts.push(contact)
  }
  save(){
    return jsonfile.writeFileSync("./contacts.json", this.contacts)
    }
  
  
  getOneById(id: number){
    return this.contacts.find(c => c.id == id)

  }
  
}



export { ContactsCollection };
