
import * as  fs from "fs"

import * as json from "jsonfile"
import { dirname } from "node:path";

const data = fs.readFileSync(__dirname + "/contacts.json").toString()
const datos = JSON.parse(data)


class Contact {
  id: number;
  name: string;
}
class ContactsCollection {

  info: any [] = []

  load(){

    
     this.info = datos 
  }

  getAll(){
    return this.info
  }

  addOne(contact:any){

    this.info.push(contact)

  }


  getOneById(id:any){
    const resultado =  this.info.find(function (e){
      return   e.id == id
    })

    return resultado

  }

  save(){
    json.writeFileSync(__dirname + "/contacts.json",this.info)
  }

  

}



export { ContactsCollection };
