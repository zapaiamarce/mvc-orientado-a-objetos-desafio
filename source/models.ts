import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
<<<<<<< HEAD
  constructor() {
    this.data = [];
  }
  load() {
    const fileData = jsonfile.readFileSync("./contacts.json");
    this.data = fileData
=======
  
  load() {
    const fileData = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = fileData;
>>>>>>> 0af862dcde530ebde66d9073c4cd7235bfc14a05
  }
  getAll(){
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save(){
<<<<<<< HEAD
    jsonfile.writeFileSync("./contacts.json", this.data);
=======
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
>>>>>>> 0af862dcde530ebde66d9073c4cd7235bfc14a05
  }
  getOneById(id){
    return this.data.find(contact => contact.id === id);
  }
}
export { ContactsCollection };
