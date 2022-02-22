import * as jsonfile from 'jsonfile';
import { ContactsControllerOptions } from './controllers';
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {

  dataBase:Contact[];
  constructor(){
    this.dataBase = [];
  }
  load(){
  const json = jsonfile.readFileSync("./contacts.json");
  this.dataBase = json;
  }

  addOne(contact:Contact) {
    this.dataBase.push(contact);
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.dataBase);
  }

  getAll():Contact[]{
    return this.dataBase;
  }
  getOneById(id:number):Contact{
    return this.dataBase.find( r => r.id == id );
  }
}

export { ContactsCollection };
