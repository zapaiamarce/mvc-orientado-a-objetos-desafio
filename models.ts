import * as jsonfile from 'jsonfile';
import * as contacts from './contacts.json';
// import * as fs from 'fs';

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact [] = [];
  load(){
   const rawData = jsonfile.readFileSync('./contacts.json');
   this.data = rawData
  };
  getAll(){
    // console.log('this.data = ' + this.data);
    return this.data;
  };
  addOne(contact:Contact){
    this.data.push(contact);
  };
  save(){
    const lista = this.data;
    jsonfile.writeFileSync('./contacts.json', lista);
  }
  getOneById(id){
    const contactFinded = this.data.find((contact) =>{
      return contact.id == id
    });

    return contactFinded
  }
}
export { ContactsCollection, Contact };
