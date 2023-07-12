import * as fs from "fs"
import * as jsonfile from "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data:Contact[]
  constructor(){
    this.data = []
  }
  load(){
    this.data = JSON.parse(fs.readFileSync(__dirname + "/contacts.json","utf-8"))
  }
  getAll(){
    return this.data
  }
  addOne(contact:Contact){
    this.data.push(contact)
  }
  save(){
    const data = JSON.stringify(this.data)
    fs.writeFileSync(__dirname + "/contacts.json", data)
  }
  getOneById(id:number){
    return this.data.find(el => el.id === id)
    // const dataFinder = this.data.find(el => el.id === id)
    // if(dataFinder.id === id){
    //   return dataFinder
    // }else{
    //   return this.data
    // }
  }
}
export { ContactsCollection };
