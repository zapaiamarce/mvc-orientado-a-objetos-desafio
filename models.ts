import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load(){
    const json = jsonfile.readFileSync("./contacts.json");
    this.data = json;
  }
  getAll(){
    return this.data;
  }
  addOne(contact){
    this.data.push(contact);
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id){
    const idEncontrado = this.data.find((c)=>{
      if (c.id == id){
        return true;
      }
    })
    return idEncontrado;
  }
}
export { ContactsCollection };
