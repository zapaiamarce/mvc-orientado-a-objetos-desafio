import * as lodash from "lodash";
import * as jsonfile from "jsonfile";
import { ContactsController } from "./controllers";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contactsList: Contact[] = []
  
  load(){
      const contactsBuffer = jsonfile.readFileSync(__dirname + "/contacts.json");
      this.contactsList = contactsBuffer;
      return this.contactsList;
  };
  getAll(){
    return this.contactsList;
  };
  addOne(contacto: Contact){
    this.contactsList.push(contacto)
  };
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.contactsList)
  };
  getOneById(id: number){
    return lodash.find(this.contactsList, (p) => p.id === id);
  };
}
export { ContactsCollection };




// const contact1 = new Contact();
// contact1.id = 14;
// contact1.name = "Jose";
// const lolo = new ContactsCollection();
// // console.log(lolo.load());

// lolo.addOne(contact1);
// console.log(lolo.getAll());



