import * as jsonfile from "jsonfile"

class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  internalProperty: Contact[] = [];
  load(){
    this.internalProperty = jsonfile.readFileSync("./contacts.json");
  }
  getAll(){
    return this.internalProperty;
  }
  addOne(contact: Contact){
    this.internalProperty.push(contact);
  }
  save(){
    jsonfile.writeFileSync("./contacts.json", this.internalProperty);
  }
  getOneById(id: number){
    return this.internalProperty.find((item) => (item.id == id));
  }
}

export { ContactsCollection, Contact };