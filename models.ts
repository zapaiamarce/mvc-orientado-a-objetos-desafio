import * as fs from "fs"
import * as find from "lodash/find"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
 
  arrayData = []
  
  load(){

  const dataJson = fs.readFileSync(__dirname + "/contacts.json").toString()
  const dataParseada  = JSON.parse (dataJson)
 
  dataParseada.forEach(element => {
    this.addOne(element)
  });
    }

  getAll(){
    return this.arrayData
    }

  addOne(contact:Contact){
   this.arrayData.push(contact)
  }
  save(){
   const arrayBuffer = JSON.stringify(this.arrayData)
      fs.writeFileSync("./contacts.json",arrayBuffer)
  } 

  getOneById(id) {
   return find(this.arrayData,{id:id})
  }

}


export { ContactsCollection };
