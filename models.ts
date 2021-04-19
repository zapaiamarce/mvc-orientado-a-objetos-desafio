import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load(){
    const dataJSON = jsonfile.readFileSync("./contacts.json")
    return this.data = dataJSON;
  }
  getAll(){
    return this.data;
  }
  addOne (contact: Contact){
    return this.data.push (contact);
  }
  save(){
    return jsonfile.writeFileSync("./contacts.json", this.data)
  }
  getOneById(id:number){
    const contacts = this.data;
    return contacts.find((c)=>{return c.id == id});
  }
}

//const prueba = jsonfile.readFileSync("./contacts.json")
//console.log (prueba);




export { ContactsCollection };
