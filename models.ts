import * as jsonfile from "jsonfile";

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data:Contact[] = [];
  load(){
    const json = jsonfile.readFileSync("./contacts.json");
    this.data = json;
  }
  getAll(){
    return this.data
  }
  addOne(contact:Contact){
    this.data.push(contact);
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id:number){
    const encontrado = this.data.find((contacto)=>{
      if (contacto.id == id){
        return true;
      };
    });
    return encontrado
  };
}
export { ContactsCollection };
