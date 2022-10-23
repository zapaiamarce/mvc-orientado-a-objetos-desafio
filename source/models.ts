import * as jsonfile from "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load(){
    const datos = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = datos;
  }
  getAll(){
    return this.data;
  }
  addOne(contact:Contact){
    this.data.push(contact);
    this.save()
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.data);
  }
  getOneById(id:number){
    const foundContact = this.data.find((contacts) => contacts.id == id); 
    return foundContact;
  }
}
export { ContactsCollection };
