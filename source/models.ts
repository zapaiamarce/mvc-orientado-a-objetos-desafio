import * as jsonfile from "jsonfile"
class Contact {
  id: number=0 ;
  name: string="" ;
}

class ContactsCollection {
  data: Contact[]=[];
  load(){
    const json=jsonfile.readFileSync(__dirname+"/contacts.json");
    
    this.data=json;
  };
  getAll(){
    return this.data;

  }
  addOne(contact: Contact) {
    return this.data.push(contact);
  }
  save(){
    jsonfile.writeFileSync(__dirname+"/contacts.json",this.data);
  }
  getOneById(id:number){
    const resultado=this.data.find((c)=>c.id==id);
    return resultado;
  }
}
export { ContactsCollection}
