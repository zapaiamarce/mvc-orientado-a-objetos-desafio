import * as fs from 'fs';
import * as jsonfile from 'jsonfile';

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load(){
    return this.data = jsonfile.readFileSync(__dirname + "/contacts.json");
  }
  getAll(){
    return this.data;
  }
  addOne(contact:Contact){
    this.data.push(contact);
  }
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id:number){
    return this.data.find(c => c.id == id);
  }
}

export { ContactsCollection };

