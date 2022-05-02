import * as jsonfile from "jsonfile"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data : Contact[] = []

  load(){
    this.data = jsonfile.readFileSync("./contacts.json")
  }

  getAll(){
    return this.data
  }

  getOneById(id){
    return this.getAll().find(x => x.id == id)
  }

  //Hecho  
  addOne(contact:Contact){
    this.data.push(contact)
  }
  
  save(){
    jsonfile.writeFileSync("./contacts.json",this.data)
  }
}


export { ContactsCollection,Contact };
