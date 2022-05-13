import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  arrayData:Contact[] = [];
  
  load(){
    const json = jsonfile.readFileSync("./contacts.json");
    this.arrayData = json;
  }

  getAll(){
    return this.arrayData;
  }

  addOne(contact:Contact){
    this.arrayData.push(contact);
  }

  save(){
    jsonfile.writeFileSync("./contacts.json", this.arrayData);
  }

  getOneById(id){
    const idEncontrado = this.arrayData.find((contact)=>{
      if(contact.id == id){
        return true;
      }
    });

    return idEncontrado;
  }

}
export { ContactsCollection };
