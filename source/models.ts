const contacts = require("./contacts.json");
const jsonfile = require('jsonfile');

 


export class Contact {
  id: number = 0;
  name: string = "";
  constructor(id:number,name:string){
    this.id = id;
    this.name = name;
  }
}



class ContactsCollection {
  allContacts :  Contact[] = [];  

  load(){
    this.allContacts = contacts;
  }
  
  getAll(){
    return this.allContacts
  }
  
  addOne(nuevoContacto:Contact){
    this.allContacts.push(nuevoContacto)
  }
  
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.allContacts, { spaces: 2 });
  }


  getOneById(id){
    const buscar = this.allContacts.find(x => x.id === id)
    return buscar || null

  }

}
export { ContactsCollection };

