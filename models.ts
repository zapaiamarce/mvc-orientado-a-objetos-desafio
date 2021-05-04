import * as jsonfile from 'jsonfile';


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = []
  load(){
    const json = jsonfile.readFileSync("./contacts.json")
    json.map(
      c => this.contacts.push(c)
    )
  }
  getAll(){
    return this.contacts
  }
  addOne(contact:Contact){
    this.contacts.push(contact)
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.contacts)
  }
  getOneById(id){
    return this.contacts.find(
      c => c.id == id
    )
  }
}

export { ContactsCollection, Contact };
