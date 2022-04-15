import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  find() {
    throw new Error("Method not implemented.");
  }
  data: Contact[] = [];

  load(){
    const archivo = jsonfile.readFileSync("./contacts.json");
    this.data = archivo
    
  };

  getAll(){
   return this.data};

  addOne(contact: Contact){
    this.data.push(contact)
  };

  save(){
    jsonfile.writeFileSync("./contacts.json", this.data)
  }

  getOneById(id){
    return this.data.find(item => {
      return id == item.id
    })
  }
}
export { ContactsCollection };

