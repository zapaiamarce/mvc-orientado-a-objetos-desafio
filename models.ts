import * as fs from "fs";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[];
  load(){
    return this.data = JSON.parse(fs.readFileSync(__dirname+"/contacts.json", 'utf8'));
  }

  getAll(){
    return this.data;
  }

  addOne(contact){
    this.data.push(contact);
  }

  save(){
    const json = JSON.stringify(this.data);
    fs.writeFileSync(__dirname+"/contacts.json",'\n'+ json);
  }
  
  getOneById(id){
    return this.data.find((item) => item.id == id);
  }
  



}  
export { ContactsCollection };
