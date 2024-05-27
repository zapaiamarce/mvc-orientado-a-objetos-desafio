const fs = require("fs");
fs.readFileSync(__dirname + "/contacts.json", "utf8");
const contacts = require("./contacts.json");
class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  internalArray: Contact[] = [];
  load() {
    this.internalArray = JSON.parse(fs.readFileSync(__dirname + "/contacts.json", "utf8"));
  }
  getAll(): Contact[] {
    return this.internalArray;
  }
  addOne(contact){
    this.internalArray.push(contact);
  }
  save() {
    fs.writeFileSync(__dirname + "/contacts.json", JSON.stringify(this.internalArray));
  }
  getOneById(id) {  
    return this.internalArray.find((contact) => contact.id === id);
  }

}
export { ContactsCollection, Contact };
