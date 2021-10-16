//simport * as contacts from "./contacts.json"
import { writeFileSync } from "fs";
import * as jsonfile from "jsonfile"
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  arrayData: Contact[] = []
    load(){
      const file = jsonfile.readFileSync("./contacts.json")
      this.arrayData = file
    }
    getAll(){
      return this.arrayData
}
    addOne(contact:Contact){
      this.arrayData.push(contact)
}
    save(){
      jsonfile.writeFileSync("./contacts.json",this.arrayData) 
    }
    getOneById(id){
      const encontrado = this.arrayData.find(a =>{
        if(a.id == id){
          return true
        }
      })
      return encontrado
    }  
}
  export { ContactsCollection };

