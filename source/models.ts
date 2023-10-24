import * as jsonfile from "jsonfile";
import * as fs from "fs";
export { ContactsCollection };
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  contactList: Contact[] = [];

  load() {
    const contactsJson = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.contactList = contactsJson;
  }
  getAll() {
    return this.contactList;
  }
  addOne(contact: Contact) {
    this.contactList.push(contact);
  }
  getOneById(id: number) {
    const contactWanted = this.getAll();
    return contactWanted.find((c) => c.id == id);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "./contacts.json", this.contactList);
  }
}
// function main(){
//   const nueva =  new ContactsCollection
//   nueva.load()
//   nueva.addOne({id:5,name:"Nacho"})
//   console.log(nueva.getAll())
// }

// main()
