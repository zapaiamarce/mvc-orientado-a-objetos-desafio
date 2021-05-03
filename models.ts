import * as contactsJson from './contacts.json';
import * as fs from 'fs';


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  contacts: Contact[] = []
  load(){
    contactsJson.map(
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
    fs.writeFileSync("./contacts.json", JSON.stringify(this.contacts));
  }
  getOneById(id){
    return this.contacts.find(
      c => c.id == id
    )
  }
}

export { ContactsCollection };
