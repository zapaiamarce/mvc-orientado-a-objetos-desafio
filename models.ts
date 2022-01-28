import * as jsonfile from "jsonfile"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data : Contact [] = []
  load(){
    const contactosJson = jsonfile.readFileSync(__dirname + "/contacts.json")
     this.data = contactosJson   

  }

  getAll(){
     return this.data
  }

  addOne(contact) {
    return  this.data.push(contact)   
  }
   save (){
     jsonfile.writeFileSync("./contacts.json", this.data)
   }
   getOneById(id) {
    return this.data.find((c)=>{ return c.id == id })

  
   }
}

export { ContactsCollection };
