import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact [] = [];
  load(){
    const data = jsonfile.readFileSync(__dirname + "/contacts.json")
    data.forEach(element => {
      this.data.push(element)
    });
  }
  getAll(){
    return this.data
  };
  addOne(contact) {
    this.data.push(contact)
  };
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data)
  }
  getOneById(id){
    return this.data.filter(item => item.id == id)
  }
}


export { ContactsCollection };
