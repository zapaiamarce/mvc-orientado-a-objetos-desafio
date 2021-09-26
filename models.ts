import * as jsonfile from "jsonfile"
const fileContent = jsonfile.readFileSync("./contacts.json")
class Contact {
  id: number;
  name: string;
};

class ContactsCollection {
  data:Contact[]=[]
  load(){     
    fileContent.forEach(i=>{this.addOne(i)});
    this.save()  
  };
  getAll():Contact[]{return this.data;}
  addOne(contact:Contact) {
    this.data.push(contact);
    this.save();
  };
  save(){
    jsonfile.writeFileSync("./contacts.json",this.data, { spaces: 2 })
  };
  getOneById(id:number){
    return this.data.find(i=>i.id==id)    
  };
};
export { ContactsCollection, Contact };
