import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  
  load() {
    const fileData = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = fileData;
  }
  getAll(){
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id){
    return this.data.find(contact => contact.id === id);
  }
}
export { ContactsCollection };
