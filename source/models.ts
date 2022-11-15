import * as js from 'jsonfile';

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {

  data: Contact[] = [];
  
  load(){
    this.data = (js.readFileSync(__dirname +'/contacts.json'));
  }
  getAll(){
    return this.data
  }
  addOne(contact: Contact){
    this.data.push(contact);
  }
  save(){
    js.writeFileSync(__dirname +'/contacts.json',this.data);
  }
  getOneById(id: number){
    return this.data.find(e=> e.id === id);
  }
}

const contacts = new ContactsCollection();

export { ContactsCollection, Contact };
