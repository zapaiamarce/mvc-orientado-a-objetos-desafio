import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
  
}

class ContactsCollection {
data: Contact[]=[]

load(){
  const json = jsonfile.readFileSync("./contacts.json")
   this.data=json
  
}
getAll(){
  return this.data
}
addOne(contac:Contact){
   this.data.push(contac)
}
 
 save(){
   jsonfile.writeFileSync("./contacts.json",
   this.data)
  }
  getOneById(id:number){
    return this.data.find(i=>i.id==id)

  }
}

export {  ContactsCollection };
