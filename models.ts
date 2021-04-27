import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data : Contact[] = [];
  load(){
    const readJson = jsonfile.readFileSync("./contacts.json");
    this.data = readJson;
  };
  getAll(){
    return this.data;
  };
  addOne(contact:Contact){
    return this.data.push(contact);
  };
  save(){
    jsonfile.writeFile("./contacts.json",this.data);
  };
  getOneById(id){
    return this.data.find((c) => c.id == id);
  };
}
export { ContactsCollection };
