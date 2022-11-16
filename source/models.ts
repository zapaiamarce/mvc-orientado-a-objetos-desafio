import * as js from 'jsonfile';

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load(){
    const fileContent = js.readFileSync(__dirname + '/contacts.json');
    this.data = fileContent;
  }
  addOne(contact: Contact){
    this.data.push(contact);
  }
  getAll(){
    return this.data
  }
  getOneById(id: number){
    return this.data.find(e=>e.id==id);
  }
  save(){
    js.writeFileSync(__dirname + '/contacts.json',this.data);
  }
}
export { ContactsCollection };
